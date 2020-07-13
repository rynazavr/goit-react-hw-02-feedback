import React, { Component } from "react";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Statistics from "./Components/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
  plusGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  plusNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  plusBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPercentage = () => {
    if (!this.state.good) {
      return 0;
    }
    return Math.round((this.state.good * 100) / this.countTotal());
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <>
        <Header />
        <Main />
        <FeedbackOptions
          plusGood={this.plusGood}
          plusNeutral={this.plusNeutral}
          plusBad={this.plusBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
          countTotal={this.countTotal}
          countPercentage={this.countPercentage}
        />
      </>
    );
  }
}

export default App;
