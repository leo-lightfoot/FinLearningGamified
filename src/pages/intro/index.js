import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Prompt, PromptSection, PromptButton, PromptImage } from "../../components/decision";
import Page from "../../components/page";
import determinedImage from "../../images/gifs/Debitcard.gif";

export default class Intro extends Component {
  state = {
    introNumber: 0
  };

  goToNext = () => {
    this.setState({ introNumber: 1 });
  };

  render() {
    const { nextRoute } = this.props;
    const { introNumber } = this.state;

    let content;
    if (introNumber === 0) {
      content = (
        <Prompt title="🎮 Welcome to MoneyWise XP Demo! 💳💥">
          <PromptSection>
            <p>
            Your credit record is your financial reputation—it's the story of your past borrowing and repayment, including loans, credit cards, and even utility bills. Whether you’re renting a dream apartment, getting your first car loan, or applying for that perfect job, your credit record can make or break your chances! 🏠🚗👔
            </p>
            <p>
            In MoneyWise, every choice you make helps you build and protect your credit score. The better decisions you make, the higher your MoneyWise XP will grow, unlocking new levels and rewards as you level up your financial knowledge. 🌟
            </p>
            <p>Are you ready to master your credit and take control of your financial future? Your MoneyWise XP journey starts now—let’s build that credit! 💰🚀</p>
          </PromptSection>
          <PromptSection className="text-center">
            <PromptButton onClick={this.goToNext}>Play</PromptButton>
          </PromptSection>
        </Prompt>
      );
    } else {
      content = (
        <Prompt title="Credit Quest Adventure">
          <PromptSection>
            <p>
            You’re a young adult starting your financial journey. You've just moved to a new city and need to establish a strong credit foundation to achieve your dreams—whether it’s renting an apartment, buying a car, or landing your dream job. 
            </p>
            <p>
            Along the way, you'll face various challenges and decisions that will test your knowledge and judgment about credit cards and credit scores. Each decision will affect your credit score and XP points, so choose wisely!
            </p>
            <PromptImage src={determinedImage} alt="" />
          </PromptSection>
          <PromptSection className="text-center">
            <Link to={nextRoute} className="button">
              Continue
            </Link>
          </PromptSection>
        </Prompt>
      );
    }

    return <Page transitionKey={this.state.introNumber}>{content}</Page>;
  }
}
