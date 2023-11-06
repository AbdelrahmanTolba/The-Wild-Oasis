import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useEditSettings() {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: upadateSettings } = useMutation({
    mutationKey: ["cabins"],
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings edited successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => toast.error(error.message),
  });
  return { isEditing, upadateSettings };
}
