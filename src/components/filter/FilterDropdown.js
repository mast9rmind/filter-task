import React, { Fragment, useContext } from "react";
import { Dropdown } from "flowbite-react";
import DataContext from "../context/DataProvider";
import Search from "../search/DropdownSearch";

function FilterDropdown() {
  const {
    task,
    user,
    setCount,
    filterState,
    dispatchFilter,
    searchState,
    dispatchIsBoolean,
  } = useContext(DataContext);

  const assigneeHandler = (event) => {
    dispatchIsBoolean({
      type: "SET_ISSHOW",
      isValid: true,
    });
    const assigneeData = user.map((item) => {
      return {
        itemSubFilter: item.name,
        id: item.id,
      };
    });
    dispatchFilter({
      type: "FILTERED_SUBDROPDOWN",
      value: assigneeData,
    });
    dispatchFilter({
      type: "SELECTED_FILTERED_DROPDOWN",
      value: [...filterState.selectedFilteredDropdown, event.target.innerText],
    });
    setCount(prev=> prev + 1);
  };

  const labelHandler = (event) => {
    dispatchIsBoolean({
      type: "SET_ISSHOW",
      isValid: true,
    });
    const labelData = task.map((item) => {
      return {
        itemSubFilter: item.label,
        id: item["assignee id"],
      };
    });
    dispatchFilter({
      type: "FILTERED_SUBDROPDOWN",
      value: labelData,
    });
    dispatchFilter({
      type: "SELECTED_FILTERED_DROPDOWN",
      value: [...filterState.selectedFilteredDropdown, event.target.innerText],
    });
    setCount(prev=> prev + 1);
  };

  const prioritiesHandler = (event) => {
    dispatchIsBoolean({
      type: "SET_ISSHOW",
      isValid: true,
    });
    const prioritiesData = task.map((item) => {
      return {
        itemSubFilter: item.priorities,
        id: item["assignee id"],
      };
    });
    dispatchFilter({
      type: "FILTERED_SUBDROPDOWN",
      value: prioritiesData,
    });
    dispatchFilter({
      type: "SELECTED_FILTERED_DROPDOWN",
      value: [...filterState.selectedFilteredDropdown, event.target.innerText],
    });
    setCount(prev=> prev + 1);
  };

  const searchFilterDropdown = filterState.filteredDropdown.filter((filterDropdown) =>
    filterDropdown.toLocaleLowerCase().includes(searchState.dropdownSearch)
  );

  const searchHandler = (event) => {
    dispatchIsBoolean({
      type: "SET_ISSHOW",
      isValid: false,
    });
    dispatchIsBoolean({
      type: "SET_ISVISIBLE",
      isValid: true,
    });
  };

  const dropdown = searchFilterDropdown.map((item) => {
    let onClickHandler;

    switch (item) {
      case "Description":
        onClickHandler = searchHandler;
        break;
      case "Priorities":
        onClickHandler = prioritiesHandler;
        break;
      case "Label":
        onClickHandler = labelHandler;
        break;
      case "Assignee":
        onClickHandler = assigneeHandler;
        break;
      default:
        onClickHandler = () => {};
    }
    return (
      <Dropdown.Item
        key={item}
        onClick={onClickHandler}
        className="hover:rounded-lg"
      >
        {item}
      </Dropdown.Item>
    );
  });

  return (
    <Fragment>
      <Search />
      {dropdown}
    </Fragment>
  );
}

export default FilterDropdown;
