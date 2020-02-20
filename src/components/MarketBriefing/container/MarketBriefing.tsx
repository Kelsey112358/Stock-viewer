import * as React from 'react';
import { connect } from 'react-redux';
import { fetchMostActive } from '../flow/actions';
import { State } from 'src/types';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { addWatchList, deleteWatchList } from 'src/store/global/actions';
import { Draggable } from 'react-beautiful-dnd';

export interface StockType {
  ticker: string;
  changes?: string;
  price?: string;
  changesPercentage?: string;
  companyName?: string;
  symbol: string;
}

export interface MarketBriefingProps {
  fetchMostActive: any;
  addWatchList: any;
  deleteWatchList: any;
  mostActiveStock: Array<StockType>;
  myWatchList: Array<string>;
}
export interface MarketBriefingState {}

export class MarketBriefing extends React.Component<
  MarketBriefingProps,
  MarketBriefingState
> {
  componentDidMount() {
    this.props.fetchMostActive();
  }
  static defaultProps = {
    mostActiveStock: [],
  };

  handleChangeWatchList = (symbol: string) => {
    const { addWatchList, deleteWatchList, myWatchList } = this.props;
    if (myWatchList.indexOf(symbol) < 0) {
      return addWatchList(symbol);
    }
    return deleteWatchList(symbol);
  };

  render() {
    const { mostActiveStock, myWatchList } = this.props;
    return (
      <div className="market_briefing">
        <div className="section-title">
          <h2>Market Briefing</h2>
        </div>

        {mostActiveStock.map((item: StockType, index) => {
          let symbol = item.ticker;
          let companyName = item.companyName;
          let price = item.price;
          let changesPercentage = item.changesPercentage;
          let star =
            myWatchList.indexOf(symbol) === -1 ? (
              <Icon type="star" theme="outlined" />
            ) : (
              <Icon type="star" theme="filled" />
            );

          return (
            <Draggable key={symbol} draggableId={symbol} index={index}>
              {(provided) => (
                <div
                  className="briefing-block"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div onClick={() => this.handleChangeWatchList(symbol)}>
                    {star}
                  </div>

                  <Link rel={symbol} to={`/stocks/${symbol}`}>
                    <div className="briefing-name">
                      <p>{symbol}</p>
                      <p>{companyName}</p>
                    </div>
                  </Link>
                  <div className="briefing-performance">
                    <p>{price}</p>
                    <p>{changesPercentage}</p>
                  </div>
                </div>
              )}
            </Draggable>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  mostActiveStock: state.MarketBriefingReducer.mostActive.mostActiveStock,
  myWatchList: state.global.myWatchList,
});

const mapDispatchToProps = {
  fetchMostActive,
  addWatchList,
  deleteWatchList,
};

export const ConnectedMarketBriefing = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketBriefing);
