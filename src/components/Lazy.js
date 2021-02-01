import React, { lazy, Suspense } from "react";
//const App = lazy(() => import("../App"));
const App = lazy(() => {
  return Promise.all([
    import("../App"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});

export default function Lazy() {
  const renderLoader = () => (
    <div
      style={{
        backgroundColor: "#eae6e1",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Loading
    </div>
  );
  return (
    <Suspense fallback={renderLoader()}>
      <App />
    </Suspense>
  );
}
