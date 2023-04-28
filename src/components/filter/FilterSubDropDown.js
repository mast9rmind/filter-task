import React, { Fragment, useContext, useRef } from "react";
import { Dropdown, Checkbox, Label } from "flowbite-react";
import DataContext from "../context/DataProvider";
import DropdownSearch from '../search/DropdownSearch';

function FilterSubDropDown() {
  const { searchState, filterState, dispatchFilter } = useContext(DataContext);
  const checkbox = useRef();

  const filterHandler = (event) => {
    const subDropdownValue = event.target.value;
    
    if (filterState.selectedFilteredSubDropdown.includes(subDropdownValue)) {
      dispatchFilter({
        type: "SELECTED_FILTERED_SUBDROPDOWN",
        value: filterState.selectedFilteredSubDropdown.filter((filter) => filter !== subDropdownValue),
      });
    } else {
      dispatchFilter({
        type: "SELECTED_FILTERED_SUBDROPDOWN",
        value: [...filterState.selectedFilteredSubDropdown, subDropdownValue],
      });
    }
  }

  const searchFilterDubDropdown = filterState.filteredSubDropdown.filter(
    (filterSubDropdown) =>
    filterSubDropdown.itemSubFilter.toLocaleLowerCase().includes(searchState.dropdownSearch)
  );

  return (
    <Fragment>
      <DropdownSearch />
      {searchFilterDubDropdown.map((item) => (
        <Dropdown.Item key={item.id} className="flex gap-2 hover:rounded-lg">
          <Checkbox className="text-violet-600 focus:ring-1 focus:ring-violet-500 hover:cursor-pointer" ref={checkbox} id={item.id} checked={filterState.selectedFilteredSubDropdown.includes(item.itemSubFilter)} value={item.itemSubFilter} onChange={filterHandler}/>
          <Label htmlFor={item.id} className="font-normal hover:cursor-pointer w-full">{item.itemSubFilter}</Label>
        </Dropdown.Item>
      ))}
    </Fragment>
  );
}

export default FilterSubDropDown;
