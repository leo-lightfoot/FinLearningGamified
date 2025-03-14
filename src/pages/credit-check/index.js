import React, { Component } from "react";
import { Prompt, PromptSection, PromptButton, PromptImage } from "../../components/decision";
import Page from "../../components/page";
import happyImage from "../../images/gifs/happy.gif";

export default class CreditCheck extends Component {
  render() {
    const { gameData } = this.props;
    const moneywiseXP = gameData.creditPower;

    let feedback;
    if (moneywiseXP >= 90) {
      feedback =
        "Perfect score! When you approach the bank for credit again, you get it straight away!";
    } else if (moneywiseXP >= 30) {
      feedback =
        "Nice job! That's a pretty good credit score. When you approach the bank for credit next time, you get it, but miss out on the best rates. Go back and see if you can get a perfect score!";
    } else {
      feedback =
        "Looks like you can make some better choices. When you approach the bank for credit, you are told you still need to build up your credit score. Go back and see if you can get a perfect score!";
    }

    return (
      <Page>
        <Prompt title="Congratulations, Wise Wizard!">
          <PromptSection>
            <PromptImage src={happyImage} />
            <p>
            You've conquered the realms of MoneyWise XP, making smart choices and leveling up your financial literacy. But the adventure doesn't end here—this is just the beginning of your epic financial journey!
            </p>
            <p>
              Final MoneyWise XP: <strong>{moneywiseXP}</strong>
            </p>
            <p>{feedback}</p>
            </PromptSection>
          <PromptSection className="text-center">
          <button onClick={() => window.location.href = 'https://moneywisedemo.netlify.app/'} className="button">Replay</button>
          <button onClick={() => window.location.href = 'https://www.slack.com'} className="button">Join Community!</button>

          </PromptSection>
        </Prompt>
      </Page>
    );
  }
}
