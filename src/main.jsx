import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "@/components/ui/sonner"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RY724PkSD3XMsrzzz2OZ44wGSZY8m3UecHTcfZfuBtzX4eGC1ZR9bVUDiswzUUBqups1voMMEXdwl483kwIxwLJ00KMhaxbmx');

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="9131351613-nu2u44eeigdn2rrkbn8v1ob5oph1ftlq.apps.googleusercontent.com">
      <Provider store={store}>
        <Toaster />
        <Elements stripe={stripePromise}>
        <App />
        </Elements>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
