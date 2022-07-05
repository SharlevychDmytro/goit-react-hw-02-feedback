import { Component } from 'react';
import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateKeys = Object.keys(this.state);

  incrementStat = e => {
    const currentBtn = e.currentTarget.textContent.toLowerCase();
    this.setState(prState => ({ [currentBtn]: (prState[currentBtn] += 1) }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, tot) => acc + tot);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <Box bg="background" padding="20px">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.stateKeys}
            onLeaveFeedback={this.incrementStat}
          />

          <Statistics
            title="Statistics"
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Box>
    );
  }
}
