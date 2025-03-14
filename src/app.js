import React from "react";
import { MemoryRouter, HashRouter, Route, Routes } from "react-router-dom";
import { observer } from 'mobx-react';
import { GameLayout } from "./components/layout";
import AppRoutes from "./routes";
import gameData from "./store";
import { isDevelopment } from "./utils";
import { ROUTES } from "./constants";
import ErrorBoundary from "./components/error-boundary";

/**
 * Main App component that sets up routing and layout
 * Uses different routers based on environment (HashRouter for dev, MemoryRouter for prod)
 */
const App = () => {
  // Determine which router to use based on environment
  const Router = isDevelopment() ? HashRouter : MemoryRouter;
  // Destructure game data
  const { moneywiseXP, savings } = gameData;

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route
            path={ROUTES.FALLBACK}
            element={
              <GameLayout creditPower={moneywiseXP} savings={savings}>
                <AppRoutes gameData={gameData} />
              </GameLayout>
            }
          />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default observer(App);
