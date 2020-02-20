import * as React from 'react';
import { Icon } from 'antd';

export interface StockHeaderBoardProps {
  companyName: string;
  symbol: string;
  change: string | number;
  changePercent: string | number;
  latestTime: number;
  extendedPrice: number;
  extendedChange: string | number;
  extendedChangePercent: number | string;
  //openTime: number;
  previousClose: number;
  handleChangeWatchList: (symbol: string) => {};
  theme: any;
  changeClassName: any;
  extendedChangeClassName: string;
  iexRealtimePrice: number;
  latestPrice?: number;
}

export const StockHeaderBoard: React.SFC<StockHeaderBoardProps> = (props) => {
  const symbol = '(' + props.symbol + ')';
  return (
    <div className="stock_header_board">
      <div className="stock_header_name">
        <p>{props.companyName}</p>
        <p>{symbol}</p>
        <button
          className="star-btn"
          onClick={() => props.handleChangeWatchList(props.symbol)}
        >
          <Icon type="star" theme={props.theme} />
        </button>
      </div>
      <div className="stock_header_change">
        <p className="stock_header_price">
          {props.iexRealtimePrice ? props.iexRealtimePrice : props.latestPrice}
        </p>
        <p className={props.changeClassName}>{props.change}</p>
        <p className={props.changeClassName}>{props.changePercent}</p>
      </div>
      <p>Close as of {props.latestTime}</p>
      <div className="stock_header_change_extend">
        <p>{props.extendedPrice}</p>
        <p className={props.extendedChangeClassName}>{props.extendedChange}</p>
        <p className={props.extendedChangeClassName}>
          {props.extendedChangePercent}
        </p>
      </div>
      <p className="stock_header_afterHours">
        After hours price as of 08:59 am.
      </p>
      <div className="stock_header_previousClose">
        <p>Previous Close</p>
        <p>{props.previousClose}</p>
      </div>
    </div>
  );
};
