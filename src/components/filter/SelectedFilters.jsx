import React, { useContext } from 'react'
import DataContext from '../context/DataProvider'

const SelectedFilters = () => {
  const { filterState, dispatchFilter, setState } = useContext(DataContext)

  const removeFilterHandler = () => {
    setState(prev => ({ ...prev, count: prev.count + 1 }))
    dispatchFilter({
      type: 'SELECTED_FILTERED_SUBDROPDOWN',
      value: []
    })
  }

  return (
    <div className='flex gap-2 items-center px-4 py-1 my-1 border-[1px] border-gray-300 rounded-md w-fit text-sm'>
      <svg
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        className='w-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
      <p>{filterState.selectedFilteredDropdown}</p>
      <p>:</p>
      <p>{filterState.selectedFilteredSubDropdown.join(' ')}</p>
      {/* Use type for button */}
      <button type='button' onClick={removeFilterHandler}>
        {' '}
        <svg
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          className='w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </button>
    </div>
  )
}

export default SelectedFilters
