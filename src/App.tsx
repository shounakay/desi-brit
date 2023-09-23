import { useEffect } from "react";
import "./App.css";
// import { Faq } from "./pages/faqs/Faq";
import { RSVP } from "./pages/rsvp/RSVP";
import { DesiBrit } from "./pages/home/DesiBrit";
import emailjs from "@emailjs/browser";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { Faq } from "./pages/faqs/Faq";
import { OurStory } from "./pages/our-story/OurStory";
import { useScrollToTop } from "./hooks/useScrolltoTop";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DesiBrit />,
    },
    {
      path: "/faqs",
      element: <Faq />,
    },
    {
      path: "/rsvp",
      element: <RSVP />,
    },
    {
      path: "/our-story",
      element: <OurStory />,
    },
  ]);
  useEffect(() => emailjs.init("J87kgL7U4i4_YPcOb"), []);
  return <RouterProvider router={router} />;
}
