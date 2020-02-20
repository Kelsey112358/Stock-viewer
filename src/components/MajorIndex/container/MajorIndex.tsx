import * as React from 'react';
import { connect } from 'react-redux';
import { fetchMajorIndex } from '../flow/actions';
import { State } from 'src/types';
import { Table } from 'antd';

export interface MajorIndexProps {
  fetchMajorIndex: any;
  majorIndexesList: Array<{}>;
}
export interface MajorIndexState {}
const columns = [
  {
    title: 'Index',
    dataIndex: 'ticker',
    key: 'ticker',
  },
  {
    title: 'Index Name',
    dataIndex: 'indexName',
    key: 'indexName',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Changes',
    dataIndex: 'changes',
    key: 'changes',
  },
];

export class MajorIndex extends React.Component<
  MajorIndexProps,
  MajorIndexState
> {
  constructor(props: MajorIndexProps) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchMajorIndex();
  }
  render() {
    const { majorIndexesList } = this.props;
    return (
      <div>
        <div className="section-title">
          <h2>Major Index</h2>
        </div>
        <Table columns={columns} dataSource={majorIndexesList} />
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  majorIndexesList: state.MajorIndexReducer.majorIndex.majorIndexesList,
});

const mapDispatchToProps = {
  fetchMajorIndex,
};

export const ConnectedMajorIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(MajorIndex);
