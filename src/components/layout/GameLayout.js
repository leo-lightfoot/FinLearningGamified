import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MoneywiseXPDisplay, SavingsDisplay } from "../score-display";
import { getBasePath } from "../../utils";
import { ANIMATION } from "../../constants";

/**
 * Main game layout component that wraps all game pages
 * Provides the HUD (heads-up display) with MoneyWise XP and savings
 * Also handles page transitions
 */
const GameLayout = ({ children, creditPower, savings }) => {
  return (
    <div className="container">
      <div className="hud">
        <MoneywiseXPDisplay value={creditPower} />
        <SavingsDisplay value={savings} />
      </div>

      <div className="page-wrapper">
        <TransitionGroup component={null}>
          <CSSTransition
            key={window.location.pathname}
            timeout={ANIMATION.PAGE_TRANSITION_TIMEOUT}
            classNames={ANIMATION.PAGE_TRANSITION_CLASS}
          >
            {children}
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default GameLayout; 