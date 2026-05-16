import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Corsi from "./pages/Corsi";
import News from "./pages/News";
import Biografia from "./pages/Biografia";
import AlboOro from "./pages/AlboOro";
import Contatti from "./pages/Contatti";
import Prenotazioni from "./pages/Prenotazioni";
import Galleria from "./pages/Galleria";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/corsi" component={Corsi} />
      <Route path="/news" component={News} />
      <Route path="/biografia" component={Biografia} />
      <Route path="/albo-oro" component={AlboOro} />
      <Route path="/galleria" component={Galleria} />
      <Route path="/contatti" component={Contatti} />
      <Route path="/prenotazioni" component={Prenotazioni} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Navbar />
          <Router />
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
