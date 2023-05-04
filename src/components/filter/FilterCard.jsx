import React, { useContext } from 'react'
import { Dropdown } from 'flowbite-react'
import DataContext from '../context/DataProvider'
import FilterDropdown from './FilterDropdown'
import FilterSubDropDown from './FilterSubDropDown'

const FilterCard = () => {
  const { isBooleanState, dispatchIsBoolean } = useContext(DataContext)

  const dropdownChangeHandler = () => {
    dispatchIsBoolean({
      type: 'SET_ISSHOW',
      isValid: false
    })
  }

  return (
    <Dropdown
      label='Filter'
      dismissOnClick
      onClick={dropdownChangeHandler}
      className='grid gap-4 px-1 rounded-lg'
      color='purple'
    >
      {!isBooleanState.isShow ? <FilterDropdown /> : <FilterSubDropDown />}
    </Dropdown>
  )
}

export default FilterCard
