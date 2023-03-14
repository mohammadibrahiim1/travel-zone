import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddPaymentMethod from "../Pages/AddPaymentMethod/AddPaymentMethod";
import AllFlights from "../Pages/AllFlights/AllFlights";
import BookingDetails from "../Pages/BookingDetails/BookingDetails";
import ContactUs from "../Pages/ContactUs/ContactUs";
// import DisplayPackage from "../Pages/DisplayPackage/DisplayPackage";
import Facilities from "../Pages/Facilities/Facilities";
import FindFlights from "../Pages/FindFlights/FindFlights";
import FindStays from "../Pages/FindStays/FindStays";
import FlightListing from "../Pages/FlightListing/FlightListing";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import GuideDetails from "../Pages/GuideDetails/GuideDetails";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import PackagesDetails from "../Pages/PackageDetails/PackagesDetails";
import Packages from "../Pages/Packages/Packages";
import SetPassword from "../Pages/SetPassword/SetPassword";
import SignIn from "../Pages/SignIn/SignIn";
import VerifyAccount from "../Pages/VerifyAccount/VerifyAccount";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/findFlights",
        element: <FindFlights></FindFlights>,
      },
      {
        path: "/findStays",
        element: <FindStays></FindStays>,
      },

      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/forgotpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/verify",
        element: <VerifyAccount></VerifyAccount>,
      },
      {
        path: "/setpassword",
        element: <SetPassword></SetPassword>,
      },
      {
        path: "/addpaymentmethod",
        element: <AddPaymentMethod></AddPaymentMethod>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/facilities",
        element: <Facilities></Facilities>,
      },

      {
        path: "/tourGuide/:id",
        element: <GuideDetails></GuideDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/tourGuide/${params.id}`),
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },

      {
        path: "/packages/:id",
        element: <PackagesDetails></PackagesDetails>,
        loader: async ({ params }) =>
        fetch(`http://localhost:5000/packages/${params.id}`),
      },
      {
<<<<<<< HEAD
        path: "/bookingDetails/:id",
        element: <BookingDetails></BookingDetails>,
        loader: async ({ params }) =>
        fetch(`http://localhost:5000/packages/${params.id}`),
=======
        path: "/bookingdetails",
        element: <BookingDetails></BookingDetails>,
        // loader: async ({ params }) =>
        // fetch(`http://localhost:5000/packages/${params.id}`),
>>>>>>> a2d00516d6e3d3d16f5809220057a3fc30be053d
      },
    ],
  },

  {
    path: "/flightListing",
    element: <FlightListing></FlightListing>,
    children: [
      {
        path: "/flightListing",
        element: <AllFlights></AllFlights>,
      },
      {
        path: "/flightListing/allFlights",
        element: <AllFlights></AllFlights>,
      },
      {
        path: "/flightListing/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);
