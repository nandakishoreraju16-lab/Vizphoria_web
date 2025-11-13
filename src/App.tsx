import { useState } from "react";
import { RenaissanceBackground } from "./components/RenaissanceBackground";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/pages/HomePage";
import { EventsPage } from "./components/pages/EventsPage";
import { SchedulePage } from "./components/pages/SchedulePage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { GalleryPage } from "./components/pages/GalleryPage";
import { SponsorsPage } from "./components/pages/SponsorsPage";
import { ContactPage } from "./components/pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "events":
        return <EventsPage onNavigate={setCurrentPage} />;
      case "schedule":
        return <SchedulePage />;
      case "register":
        return <RegisterPage />;
      case "gallery":
        return <GalleryPage />;
      case "sponsors":
        return <SponsorsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen relative">
      <RenaissanceBackground />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>{renderPage()}</main>
    </div>
  );
}
