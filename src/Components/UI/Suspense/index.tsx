import { ReactNode, Suspense } from "react";

type SuspenseProp = {
  children?: ReactNode;
};

function SuspenseUI({ children }: SuspenseProp) {
  return <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>;
}

export default SuspenseUI;
