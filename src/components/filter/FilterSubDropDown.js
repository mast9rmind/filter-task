import React, { Fragment, useContext, useRef } from "react";
import { Dropdown, Checkbox, Label } from "flowbite-react";
import DataContext from "../store/list-context";
import Search from './../search/Search';

function FilterSubDropDown() {
  const { subFilter, search, selectedSubDropdown, setSelectedSubDropdown } = useContext(DataContext);
  const checkbox = useRef();

  const filterHandler = (event) => {
    const subDropdownValue = event.target.value;
    
    if (selectedSubDropdown.includes(subDropdownValue)) {
      setSelectedSubDropdown(selectedSubDropdown.filter((filter) => filter !== subDropdownValue));
    } else {
      setSelectedSubDropdown([...selectedSubDropdown, subDropdownValue]);
    }
  }

  const searchFilterDubDropdown = subFilter.filter(
    (filterSubDropdown) =>
    filterSubDropdown.itemSubFilter.toLocaleLowerCase().includes(search)
  );

  return (
    <Fragment>
      <Search />
      {searchFilterDubDropdown.map((item) => (
        <Dropdown.Item key={item.id} className="flex gap-2 hover:rounded-lg">
          <Checkbox className="text-violet-600 focus:ring-1 focus:ring-violet-500 hover:cursor-pointer" ref={checkbox} id={item.id} checked={selectedSubDropdown.includes(item.itemSubFilter)} value={item.itemSubFilter} onChange={filterHandler}/>
          <Label htmlFor={item.id} className="font-normal hover:cursor-pointer w-full">{item.itemSubFilter}</Label>
        </Dropdown.Item>
      ))}
    </Fragment>
  );
}

export default FilterSubDropDown;
