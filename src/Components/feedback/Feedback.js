import React, { Component } from "react";
import FeedbackOpt from "./feedbackOptions/FeedbackOpt";
import Notification from "./notification/Notification";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodCounter = () => {
    this.setState((prevSt) => ({ good: prevSt.good + 1 }));
  };

  neutralCounter = () => {
    this.setState((prevSt) => ({ neutral: prevSt.neutral + 1 }));
  };

  badCounter = () => {
    this.setState((prevSt) => ({ bad: prevSt.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOpt
            goodCounter={this.goodCounter}
            neutralCounter={this.neutralCounter}
            badCounter={this.badCounter}
          />
        </Section>

        {this.countTotalFeedback() < 1 ? (
          <Section title={"No feedback given"}>
            <Notification />
          </Section>
        ) : (
          <Section title={"Statics"}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={
                this.countPositiveFeedbackPercentage()
                  ? this.countPositiveFeedbackPercentage()
                  : 0
              }
            />
          </Section>
        )}
      </>
    );
  }
}

export default Feedback;
