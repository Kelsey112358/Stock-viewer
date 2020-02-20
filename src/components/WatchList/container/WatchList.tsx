import * as React from 'react';
import { State } from 'src/types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWatchListDetails } from '../flow/actions';
import { deleteWatchList } from 'src/store/global/actions';
import { Action } from 'src/types';
import { Table, Icon } from 'antd';

export interface DetailsType {
  title: string;
  dataIndex: string;
  key: string;
  width: string;
  render: any;
}

const getColumns = (action: (props: string) => Action) => {
  return [
    {
      title: '',
      dataIndex: 'symbol',
      key: 'button',
      width: '5%',
      render: (text: string) => {
        return (
          <button
            onClick={() => action(text)}
            value={text}
            className="star-btn"
          >
            <Icon type="star" theme="filled" />
          </button>
        );
      },
    },
    {
      title: 'Name',
      dataIndex: 'companyName',
      key: 'companyName',
      width: '45%',
      render: (text: string) => {
        return (
          <Link to={`/stocks/${text}`}>
            <div>
              <p>{text}</p>
            </div>
          </Link>
        );
      },
    },
    {
      title: 'Change',
      dataIndex: 'changePercent',
      key: 'changePercent',
      width: '25%',
      render: (text: number) => (text * 100).toFixed(2) + '%',
    },
    {
      title: 'Price',
      dataIndex: 'latestPrice',
      key: 'latestPrice',
      width: '35%',
    },
  ];
};

const tableHead = (
  <div className="section-title-small">
    <h2>My watchlist</h2>
  </div>
);

export interface quoteType {
  quote: {
    symbol: string;
    latestPrice: number;
    changePercent: number;
  };
}

export interface WatchListProps {
  myWatchList: Array<string>;
  fetchWatchListDetails: any;
  deleteWatchList: any;
  myWatchListDetails: {
    [key: string]: quoteType;
  };
}
export interface WatchListState {}
export class WatchList extends React.Component<WatchListProps, WatchListState> {
  constructor(props: WatchListProps) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchWatchListDetails(this.props.myWatchList.join());
  }
  componentDidUpdate(prevProps: WatchListProps) {
    const equar = (a: Array<string>, b: Array<string>) => {
      if (a.length !== b.length) {
        return false;
      } else {
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
    };
    if (!equar(this.props.myWatchList, prevProps.myWatchList)) {
      this.props.fetchWatchListDetails(this.props.myWatchList.join());
    }
  }
  render() {
    const { myWatchListDetails } = this.props;
    const myWatchListDetailsArr = (Object.values(
      myWatchListDetails
    ) as quoteType[]).map((item: quoteType) => {
      return item.quote;
    });
    return (
      <div>
        <Table
          className="my-watch-list"
          dataSource={myWatchListDetailsArr}
          columns={getColumns(this.props.deleteWatchList)}
          title={() => tableHead}
          pagination={{ defaultPageSize: 6 }}
          scroll={{ x: true }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  myWatchList: state.global.myWatchList,
  myWatchListDetails: state.WatchListReducer.myWatchListDetails,
});
const mapDispatchToProps = {
  fetchWatchListDetails,
  deleteWatchList,
};
export const ConnectedWatchList = connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);
