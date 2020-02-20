import * as React from 'react';
import { connect } from 'react-redux';
import { ConnectedWatchList as WatchList } from 'src/components/WatchList/index';
import { ConnectedMarketBriefing as MarketBriefing } from 'src/components/MarketBriefing/index';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { addWatchList } from 'src/store/global/actions';
import { State } from 'src/types/index';
import { Row, Col } from 'antd';

export interface BriefingWatchListWrapProps {
  addWatchList: any;
  myWatchList: Array<string>;
}
export interface BriefingWatchListWrapState {}

export class BriefingWatchListWrap extends React.Component<
  BriefingWatchListWrapProps,
  BriefingWatchListWrapState
> {
  constructor(props: BriefingWatchListWrapProps) {
    super(props);
    this.state = {};
  }

  onDragEnd = (result: any) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (
      source.droppableId === 'watch-list' ||
      source.droppableId === destination.droppableId
    ) {
      return;
    } else {
      const symbol = result.draggableId;
      if (this.props.myWatchList.indexOf(symbol) === -1) {
        this.props.addWatchList(symbol);
      } else {
        return;
      }
    }
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Row type="flex" justify="space-between">
          <Col span={16}>
            <Droppable droppableId="market-briefing">
              {(provided) => (
                <div ref={provided.innerRef}>
                  <MarketBriefing />
                </div>
              )}
            </Droppable>
          </Col>
          <Col span={6}>
            <Droppable droppableId="watch-list">
              {(provided) => (
                <div ref={provided.innerRef}>
                  <WatchList />
                </div>
              )}
            </Droppable>
          </Col>
        </Row>
      </DragDropContext>
    );
  }
}
const mapStateToProps = (state: State) => ({
  myWatchList: state.global.myWatchList,
});

const mapDispatchToProps = {
  addWatchList,
};

export const ConnectedBriefingWatchListWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(BriefingWatchListWrap);
