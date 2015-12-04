import _ from "underscore";
/*eslint-disable no-unused-vars*/
import React from "react";
/*eslint-enable no-unused-vars*/
import {Table} from "reactjs-components";

import FilterHeadline from "../../components/FilterHeadline";
import FilterInputText from "../../components/FilterInputText";
import ResourceTableUtil from "../../utils/ResourceTableUtil";
import SidePanels from "../../components/SidePanels";
import StringUtil from "../../utils/StringUtil";
import TableUtil from "../../utils/TableUtil";

const METHODS_TO_BIND = [
  "handleSearchStringChange",
  "resetFilter"
];

export default class OrganizationTab extends React.Component {
  constructor() {
    super(arguments);

    this.state = {
      openNewItemModal: false,
      searchString: ""
    };

    METHODS_TO_BIND.forEach(function (method) {
      this[method] = this[method].bind(this);
    }, this);
  }

  handleSearchStringChange(searchString) {
    this.setState({searchString});
  }

  getColGroup() {
    return (
      <colgroup>
        <col />
      </colgroup>
    );
  }

  getColumns() {
    let className = ResourceTableUtil.getClassName;
    let heading = ResourceTableUtil.renderHeading({
      description: "Description"
    });
    let propSortFunction = ResourceTableUtil.getPropSortFunction("description");

    return [
      {
        className,
        headerClassName: className,
        prop: "description",
        render: this.renderHeadline,
        sortable: true,
        sortFunction: propSortFunction,
        heading
      }
    ];
  }

  getVisibleItems(items) {
    let searchString = this.state.searchString.toLowerCase();

    if (searchString !== "") {
      return _.filter(items, function (item) {
        let description = item.get("description").toLowerCase();
        return description.indexOf(searchString) > -1;
      });
    }

    return items;
  }

  resetFilter() {
    this.setState({searchString: ""});
  }

  render() {
    let props = this.props;
    let itemName = props.itemName;
    let items = props.items;

    return (
      <div className="flex-container-col">
        <div className={`${itemName}-table-header`}>
          <FilterHeadline
            onReset={this.resetFilter}
            name={StringUtil.capitalize(itemName)}
            currentLength={this.getVisibleItems(items).length}
            totalLength={items.length} />
          <ul className="list list-unstyled list-inline flush-bottom">
            <li>
              <FilterInputText
                searchString={this.state.searchString}
                handleFilterChange={this.handleSearchStringChange}
                inverseStyle={true} />
            </li>
            <li className="button-collection list-item-aligned-right">
              <a
                className="button button-success"
                onClick={this.props.handleNewItemClick}>
                {props.newItemTitle}
              </a>
            </li>
          </ul>
        </div>
        <div className="page-content-fill flex-grow flex-container-col">
          <Table
            className="table inverse table-borderless-outer
              table-borderless-inner-columns flush-bottom"
            columns={this.getColumns()}
            colGroup={this.getColGroup()}
            data={this.getVisibleItems(items)}
            idAttribute={props.itemId}
            itemHeight={TableUtil.getRowHeight()}
            sortBy={{prop: "description", order: "asc"}}
            useFlex={true}
            transition={false}
            useScrollTable={false} />
        </div>
        <SidePanels
          params={this.props.params}
          openedPage={`settings-organization-${itemName}`} />
      </div>
    );
  }
}
