import React, { Fragment, useContext } from "react";
import DataContext from "../context/DataProvider";
import { Dropdown } from "flowbite-react";
import FilterDropdown from "./FilterDropdown";
import FilterSubDropDown from "./FilterSubDropDown";

function FilterCard() {
    const { isBooleanState, dispatchIsBoolean } = useContext(DataContext);

    const dropdownChangeHandler = () => {
      dispatchIsBoolean({
        type: "SET_ISSHOW",
        isValid: false,
      });
    }

  return (
    <Fragment>
      <Dropdown label="Filter" dismissOnClick={true} onClick={dropdownChangeHandler} className="px-1 rounded-lg grid gap-4" color="purple">
        {!isBooleanState.isShow ? <FilterDropdown /> : <FilterSubDropDown/>}
      </Dropdown>
    </Fragment>
  );
}

export default FilterCard;
