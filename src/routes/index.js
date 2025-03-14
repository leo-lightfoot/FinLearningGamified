import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Intro from "../pages/intro";
import SavingFirst from "../pages/saving-first";
import ChoosingPlastic from "../pages/choosing-plastic";
import Budgeting from "../pages/budgeting";
import TransactionDetective from "../pages/transaction-detective";
import GettingOnline from "../pages/getting-online";
import BirthdaySurprise from "../pages/birthday-suprise";
import TheFluStrikes from "../pages/the-flu-strikes";
import PlasticMail from "../pages/plastic-mail";
import MissingCard from "../pages/missing-card";
import CreditCheck from "../pages/credit-check";
import { ROUTES } from "../constants";
import { getNextRoute } from "../utils";

// Define the decision components in order
export const decisions = [
  SavingFirst,
  ChoosingPlastic,
  props => <Budgeting iterationNumber={0} {...props} />,
  TransactionDetective,
  GettingOnline,
  BirthdaySurprise,
  TheFluStrikes,
  PlasticMail,
  MissingCard,
  CreditCheck
];

/**
 * Main application routes component
 * Handles routing for all game scenarios
 */
const AppRoutes = ({ gameData }) => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<Intro gameData={gameData} nextRoute="/0" />}
      />

      {decisions.map((Component, i) => (
        <Route
          key={i}
          path={`/${i}`}
          element={
            <Component
              gameData={gameData}
              nextRoute={getNextRoute(i, decisions.length)}
            />
          }
        />
      ))}

      <Route path={ROUTES.FALLBACK} element={<Navigate to={ROUTES.HOME} />} />
    </Routes>
  );
};

export default AppRoutes; 