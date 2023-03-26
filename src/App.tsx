import { RouterProvider } from "react-router-dom";
import router from "./Routes";

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
