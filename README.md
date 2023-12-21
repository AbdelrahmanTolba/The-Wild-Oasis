
# The-Wild-Oasis 🌐 ([Live Server](https://the-wild-oasis-gamma-beryl.vercel.app))

> The Wild Oasis is a user-friendly hotel management application. This application is intended to handle hotel operations, such as sales statistics, cabin management, user management, booking management, and many customization possibilities. And so much more!


![Dashboard](https://github.com/AbdelrahmanTolba/The-Wild-Oasis/assets/90225424/20bc34da-2cf7-4d67-90fb-434679900796)



## Build with

- [React](https://react.dev)
- [React Router Dom](https://reactrouter.com/en/main)
- [React Query](https://tanstack.com/query/v3/)
- [Supabase](https://supabase.com/)
- [react-hot-toast](https://react-hot-toast.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [date-fns](https://date-fns.org/)
- [recharts](https://recharts.org/en-US/)
- [react-hook-form](https://react-hook-form.com/)
- [styled-components](https://styled-components.com/)
- [Vite](https://vitejs.dev)
- [Hosted by Vercel](https://www.vercel.com)

## Screenshot

### Login Page
![Login](https://github.com/AbdelrahmanTolba/The-Wild-Oasis/assets/90225424/931877c3-e29f-405b-b875-86cc3ed280a1)


### Dshboard Page
![Dashboard](https://github.com/AbdelrahmanTolba/The-Wild-Oasis/assets/90225424/9eacb4ee-3f2a-48be-af08-e9127ff63131)

### Bookings Page
![Booking](https://github.com/AbdelrahmanTolba/The-Wild-Oasis/assets/90225424/68379460-4f05-4fe3-83eb-e626d5960c61)


### Cabins Page
![Cabins](https://github.com/AbdelrahmanTolba/The-Wild-Oasis/assets/90225424/4b0d0a86-e987-4ace-aefb-7e4ce912840a)


### Create user Page
![Users](https://github.com/AbdelrahmanTolba/The-Wild-Oasis/assets/90225424/3785057d-c234-4806-84d9-5cd97fc43a1c)


### Settings Page
![Settings](https://github.com/AbdelrahmanTolba/The-Wild-Oasis/assets/90225424/181148ec-97de-4c77-bb48-58864fb22f88)


### Profile Page
![Profile](https://github.com/AbdelrahmanTolba/The-Wild-Oasis/assets/90225424/d9665532-f72f-41e8-8486-d5aef4c0e6e7)


### Light Theme Preview
![LightmMode](https://github.com/AbdelrahmanTolba/The-Wild-Oasis/assets/90225424/cc055c57-f71a-4bc0-9e66-7c67e71c80c4)



## Getting Started

1. **_Clone the repository_**

```sh
git clone https://github.com/AbdelrahmanTolba/The-Wild-Oasis.git
```

2. **_Navigate to repository directory_**

```sh
cd The-Wild-Oasis
```

3. **_Install dependencies_**

```sh
npm install
```

3. **_Run Localy_**

```sh
npm run dev
```


## Features:

-  **_Authentication and Authorization_**

    -   Users of the app are hotel employees. They can logged in into the application to perform tasks.
    -   New users can only be signed up inside the applications (to guarantee that only actual hotel employees can get accounts).
    -   Users able to upload an avatar, and change their name and password

-   **_Cabins_**

    -   The app has a table view with all cabins, showing the cabin photo, name, capacity, price, and current discount.
    -   Users able to update or delete a cabin, and create new cabins (including uploading a photo)

-   **_Bookings_**

    -   The app has a table view with all bookings, showing arrival and departure dates, status, and paid amount, as well as cabin and guest data.
    -   The booking status can "unconfirmed" (booked but not yet checked in), "checked in", or "checked out". The table filterable by this important status.
    -   Other booking data includes: the number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price.

-   **_Check In/Out_**

    -   Users able to delete, check-in, or check out a booking as the guest arrives (no editing necessary for now).
    -   Bookings may not have been paid yet on guest arrival. Therefore, on check-in, users need to accept payment (outside the app), and then confirm that payment has been received (inside the app).
    -   On check-in, the guest should have the ability to add breakfast for the entire stay, if they hadn't already.

-   **_Guests_**

    -   Guest data contain full name, email, national ID, nationality, and a country flag for easy identification.

-   **_Dashboard_**

    -   The initial app screen should be a dashboard, to display important information for the last 7, 30, or 90 days:
        -   A list of guests checking in and out on the current day. Users should be able to perform these tasks from here.
        -   Statistics on recent bookings, sales, check-ins, and occupancy rate.
        -   A chart showing all daily hotel sales, showing both "total" sales and "extras" sales (only breakfast at the moment).
        -   A chart showing statistics on stay durations, as this is an important metric for the hotel

-   **_Settings_**

    -   Users can customize a few application-wide settings: Breakfast price, minimum and maximum number of nights/booking, maximum number of guests/booking.
      
-  **_Dark Mode_**
   -   The app detect the user theme if it Dark/Light mode.



