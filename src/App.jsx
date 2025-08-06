import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";

import Hero from "./pages/hero.jsx";
import About from "./pages/about.jsx";
import Framework from "./pages/framework.jsx";
import FAQ from "./pages/faq.jsx";
import Terms_of_Use from "./pages/terms_of_use.jsx";
import Policy from "./pages/policy.jsx";
import Conversation from "./pages/conversation.jsx";
import NotFound from "./components/notfound.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Hero /> },
        { path: "about", element: <About /> },
        { path: "framework", element: <Framework /> },
        { path: "faq", element: <FAQ /> },
        { path: "terms_of_use", element: <Terms_of_Use /> },
        { path: "policy", element: <Policy /> },
        { path: "conversation", element: <Conversation /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <div className="bg-UXHQ-white min-h-screen bg-[url('/assets/home-page/BG.png')] bg-repeat bg-fixed">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
