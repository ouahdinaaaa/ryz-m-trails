import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Histoires from "./pages/Histoires";
import HistoireDetail from "./pages/HistoireDetail";
import Association from "./pages/Association";
import Joelette from "./pages/Joelette";
import Engager from "./pages/Engager";
import Contact from "./pages/Contact";
import VisionValeurs from "./pages/VisionValeurs";
import Actions from "./pages/Actions";
import Evenements from "./pages/Evenements";
import Projets from "./pages/Projets";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/histoires" element={<Histoires />} />
          <Route path="/histoires/:id" element={<HistoireDetail />} />
          <Route path="/association" element={<Association />} />
          <Route path="/joelette" element={<Joelette />} />
          <Route path="/engager" element={<Engager />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vision-valeurs" element={<VisionValeurs />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
