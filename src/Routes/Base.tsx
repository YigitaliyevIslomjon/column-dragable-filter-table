import { SuspenseUI } from "Components/UI";
import { MainPage } from "Views/Main";

export const Base = {
  path: "/",
  element: (
    <SuspenseUI>
      <MainPage />,
    </SuspenseUI>
  ),
};
