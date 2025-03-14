import React, { Component } from "react";
import AnimatedNumber from "./animated-number";
import "./style.css";

/**
 * Displays the player's MoneyWise XP score
 * @deprecated Use MoneywiseXPDisplay instead
 */
export class CreditPowerDisplay extends Component {
  render() {
    // Forward to the new component for backward compatibility
    return <MoneywiseXPDisplay value={this.props.value} />;
  }
}

/**
 * Displays the player's MoneyWise XP score
 */
export class MoneywiseXPDisplay extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="score-display">
        <div className="score-display__label">MoneyWise XP</div>
        <div className="score-display__value-container">
          <AnimatedNumber value={value} />
        </div>
      </div>
    );
  }
}

/**
 * Displays the player's savings amount
 */
export class SavingsDisplay extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="score-display text-right">
        <div className="score-display__label">Savings</div>
        <div className="score-display__value-container score-display__value-container--right">
          €<AnimatedNumber className="score-display__toast--right" value={value} />
        </div>
      </div>
    );
  }
}
