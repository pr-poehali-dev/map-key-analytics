
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProfilesRoadmap from "./pages/ProfilesRoadmap";
import PersonnelOutsourcingRoadmap from "./pages/PersonnelOutsourcingRoadmap";
import PersonnelStaffRoadmap from "./pages/PersonnelStaffRoadmap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profiles-roadmap" element={<ProfilesRoadmap />} />
          <Route path="/personnel-outsourcing-roadmap" element={<PersonnelOutsourcingRoadmap />} />
          <Route path="/personnel-staff-roadmap" element={<PersonnelStaffRoadmap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;