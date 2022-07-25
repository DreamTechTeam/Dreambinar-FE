import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

// styles
import "./css/style.css";
import './charts/ChartjsConfig';
import "@fontsource/source-sans-3";
import "react-toastify/dist/ReactToastify.css";

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});

// LogRocket
LogRocket.init('jcrzqa/dreambinar');
setupLogRocketReact(LogRocket);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister }}
        >
          <App />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </PersistQueryClientProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
