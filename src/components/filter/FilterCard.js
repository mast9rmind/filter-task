import React, { Fragment, useContext } from "react";
import DataContext from "../store/list-context";
import { Dropdown } from "flowbite-react";
import FilterDropdown from "./FilterDropdown";
import FilterSubDropDown from "./FilterSubDropDown";

function FilterCard() {
    const { myBool, setMyBool } = useContext(DataContext);

    const dropdownChangeHandler = () => {
      setMyBool(false)
    }

  return (
    <Fragment>
      <Dropdown label="Filter" dismissOnClick={true} onClick={dropdownChangeHandler} className="px-1 rounded-lg grid gap-4" color="purple" bac>
        {!myBool ? <FilterDropdown /> : <FilterSubDropDown/>}
      </Dropdown>
    </Fragment>
  );
}

export default FilterCard;
