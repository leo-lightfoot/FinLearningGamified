import React, { Component } from "react";
import { Prompt, PromptSection, PromptButton } from "../../components/decision";
import Results from "../../components/results/";
import Page from "../../components/page";
import birthdayImage from "../../images/gifs/money.gif";

export default class BirthdaySurprise extends Component {
  state = {
    showResult: false
  };

  goToResult = () => {
    this.props.gameData.incrementSavings(100);
    this.setState({ showResult: true });
  };

  render() {
    const { nextRoute } = this.props;

    let contents;
    if (this.state.showResult) {
      contents = (
        <Results
          title="Here's What's Next:"
          message="Keep answering the questions and making wise choices and get ready to claim your well-deserved reward at the end. Let's finish strong!"
          nextRoute={nextRoute}
        />
      );
    } else {
      contents = (
        <Prompt title="You've Reached the Halfway Mark!">
          <PromptSection>
            <img
              style={{ maxWidth: "25%", display: "block", margin: "0 auto" }}
              src={birthdayImage}
              alt=""
            />
            <p>
            Great job! You're halfway through MoneyWise XP and making smart financial decisions. To keep you motivated, we have an exciting reward waiting for you once you finish the quiz.
            </p>
          </PromptSection>
          <PromptSection className="text-center">
            <PromptButton onClick={this.goToResult}>Continue</PromptButton>
          </PromptSection>
        </Prompt>
      );
    }

    return <Page transitionKey={this.state.showResult}>{contents}</Page>;
  }
}
