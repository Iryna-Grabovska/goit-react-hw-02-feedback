import React, { Component } from 'react';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onHandelClick = options => {
    this.setState(prevState => ({ [options]: prevState[options] + 1 }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };
  // totalFeedback = () => {
  //   return Object.keys(this.state).reduce(
  //     (acc, value) => acc + this.state[value],
  //     0,
  //   );
  // };
  render() {
    const { good, neutral, bad } = this.state;
    const countTotalfeedback = this.totalFeedback();

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onHandelClick}
          />
        </Section>

        <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalfeedback}
          />
        </Section>
      </>
    );
  }
}
export default App;
