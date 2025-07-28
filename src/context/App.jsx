import React, { useState } from "react";
import DesktopOnboarding from "./components/DesktopOnboarding";
import GarageList from "./components/GarageList";

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  return (
    <>
      {showOnboarding ? (
        <DesktopOnboarding onStart={() => setShowOnboarding(false)} />
      ) : (
        <GarageList />
      )}
    </>
  );
}

export default App;
