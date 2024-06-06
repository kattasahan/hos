import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { PrimeReactProvider } from 'primereact/api';

import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-blue/theme.css";
import 'primereact/resources/primereact.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>
);