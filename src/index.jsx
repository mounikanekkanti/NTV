import React from "react";
import ReactDOMClient from "react-dom/client";
import { ScreenBaseMap } from "./screens/ScreenBaseMap";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ScreenBaseMap />);
