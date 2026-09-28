import { lazy } from "react";
import { MotionConfig } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";

const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const GalleryPage = lazy(() => import("./pages/GalleryPage.jsx"));
const HeritagePage = lazy(() => import("./pages/HeritagePage.jsx"));
const MenuPage = lazy(() => import("./pages/MenuPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const ReservationsPage = lazy(() => import("./pages/ReservationsPage.jsx"));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="heritage" element={<HeritagePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="reservations" element={<ReservationsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}
