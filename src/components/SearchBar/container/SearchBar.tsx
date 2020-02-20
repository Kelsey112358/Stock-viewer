import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSymbols } from 'src/components/SearchBar/flow/actions';
import { State } from 'src/types';

import { List } from 'antd';

export interface SearchBarProps {
  fetchSymbols: (value: string) => Promise<any>;
  bestMatches: Array<{
    symbol: string;
    name: string;
  }>;
}

export interface SearchBarState {
  searchText: string;
  hideList: boolean;
}

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchText: '',
      hideList: true,
    };
  }

  handleInputChange = (e: any) => {
    const { value } = e.target;
    value === ''
      ? this.setState(() => ({ hideList: true }))
      : this.setState(() => ({ hideList: false }));
    this.setState(() => ({ searchText: value }));
    this.props.fetchSymbols(value);
  };
  handleInputOnBlur = (e: any) => {
    this.setState(() => ({
      hideList: true,
    }));
  };
  render() {
    const { bestMatches } = this.props;
    const { searchText, hideList } = this.state;
    const listClassName = 'search_bar_list';

    return (
      <div className="search_bar">
        <input
          value={searchText}
          onChange={this.handleInputChange}
          onBlur={this.handleInputOnBlur}
        />
        <List
          className={`${listClassName} ${hideList ? 'hide' : 'visible'}`}
          size="small"
          bordered
          dataSource={bestMatches}
          renderItem={(item) => (
            <List.Item key={item['1. symbol']}>
              <Link rel={item.symbol} to={`/stocks/${item['1. symbol']}`}>
                {item['1. symbol']}-{item['2. name']}
              </Link>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  bestMatches: state.SearchBarReducer.symbols.bestMatches,
});

const mapDispatchToProps = {
  fetchSymbols,
};

export const ConnectedSearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
