import * as React from 'react';
import { connect } from 'react-redux';
import { fetchMarketEarnings } from '../flow/actions';
import { State } from 'src/types';

export interface MarketEarningsProps {
  fetchMarketEarnings: any;
  marketEarnings: any;
}

export interface MarketEarningsState {}
export class MarketEarnings extends React.Component<
  MarketEarningsProps,
  MarketEarningsState
> {
  constructor(props: MarketEarningsProps) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.fetchMarketEarnings();
  };
  render() {
    return (
      <div className="section-title">
        <h2>Market Earnings</h2>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  marketEarnings: state.MarketEarningsReducer.marketEarnings,
});

const mapDispatchToProps = {
  fetchMarketEarnings,
};

export const ConnectedMarketEarnings = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketEarnings);
