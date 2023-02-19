import "./App.css";
import { Router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";



function App() {
  return <RouterProvider router={Router} />;
}

export default App;
