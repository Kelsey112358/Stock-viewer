import * as React from "react";
import classNames from "classnames";
import { StockHeaderBoard } from "./StockHeaderBoard";
import { QuoteType } from "../container/StockDetails";

export interface StockHeaderProps {
  quote: QuoteType;
  watchList: Array<{}>;
  handleChangeWatchList: any;
}

export const StockHeader: React.SFC<StockHeaderProps> = props => {
  const change =
    props.quote.change > 0 ? "+" + props.quote.change : props.quote.change;
  const changePercent2 = (props.quote.changePercent * 100).toFixed(2) + "%";
  const changePercent =
    props.quote.changePercent > 0
      ? "(+" + changePercent2 + ")"
      : "(" + changePercent2 + ")";
  const extendedChange =
    props.quote.extendedChange > 0
      ? "+" + props.quote.extendedChange
      : props.quote.extendedChange;
  const extendedChangePercent2 =
    (props.quote.extendedChangePercent * 100).toFixed(2) + "%";
  const extendedChangePercent =
    props.quote.extendedChangePercent > 0
      ? "(+" + extendedChangePercent2 + ")"
      : "(" + extendedChangePercent2 + ")";
  const theme =
    props.watchList.indexOf(props.quote.symbol) >= 0 ? "filled" : "outlined";
  const changeClassName = classNames({
    green: props.quote.change > 0,
    red: props.quote.change < 0
  });

  const extendedChangeClassName = classNames({
    green: props.quote.extendedChange > 0,
    red: props.quote.extendedChange < 0
  });
  return (
    <div className="stock-header stock-details-section">
      <StockHeaderBoard
        companyName={props.quote.companyName}
        symbol={props.quote.symbol}
        iexRealtimePrice={props.quote.iexRealtimePrice}
        change={change}
        changePercent={changePercent}
        latestTime={props.quote.latestTime}
        extendedPrice={props.quote.extendedPrice}
        extendedChange={extendedChange}
        extendedChangePercent={extendedChangePercent}
        previousClose={props.quote.previousClose}
        latestPrice={props.quote.latestPrice}
        handleChangeWatchList={props.handleChangeWatchList}
        theme={theme}
        changeClassName={changeClassName}
        extendedChangeClassName={extendedChangeClassName}
      />
    </div>
  );
};
