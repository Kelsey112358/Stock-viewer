import * as React from 'react';
import { connect } from 'react-redux';
import { fetchSectorPerformance } from '../flow/actions';
import { State } from 'src/types';

export interface SectorPerformanceProps {
  fetchSectorPerformance: any;
  sectorPerformance: Array<{
    sector: string;
    changesPercentage: string;
  }>;
}

export interface SectorPerformanceState {}
export class SectorPerformance extends React.Component<
  SectorPerformanceProps,
  SectorPerformanceState
> {
  constructor(props: SectorPerformanceProps) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.fetchSectorPerformance();
  };
  render() {
    const { sectorPerformance } = this.props;
    return (
      <div>
        <div className="section-title">
          <h2>Sector Performance</h2>
        </div>
        <div className="sector-wrapper">
          {sectorPerformance.map((item) => {
            return (
              <div key={item.sector} className="sector-performance-block">
                <p className="sector-name">{item.sector}</p>
                <p className="sector-performance">{item.changesPercentage}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  sectorPerformance: state.SectorPerformanceReducer.sectorPerformance,
});

const mapDispatchToProps = {
  fetchSectorPerformance,
};

export const ConnectedSectorPerformance = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectorPerformance);
