import React, { lazy, Suspense } from "react";
import Lottie from "./Lottie";
import smile from "../assets/smile.json";
const App = lazy(() => import("../App"));
/*
const App = lazy(() => {
  return Promise.all([
    import("../App"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});
*/

export default function Lazy() {
  const renderLoader = () => (
    <div
      style={{
        backgroundColor: "#a18077",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "calc(min(25vh, 25vw))",
          height: "calc(min(25vh, 25vw))",
        }}
      >
        <Lottie play={null} animationData={smile} />
      </div>
    </div>
  );
  return (
    <Suspense fallback={renderLoader()}>
      <App />
    </Suspense>
  );
}
