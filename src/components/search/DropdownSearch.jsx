import React, { useContext } from 'react'
import DataContext from '../context/DataProvider'

const DropdownSearch = () => {
  const { dispatchSearch } = useContext(DataContext)

  const searchHandler = event => {
    dispatchSearch({
      type: 'DROPDOWN_SEARCH',
      value: event.target.value
    })
  }
  return (
    <div className='flex w-40 px-2 mb-1 bg-gray-100 rounded-lg'>
      <svg
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        className='w-7'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>{' '}
      <input
        className='border-none focus:shadow-[0_0_rgba(0,0,0/0%)] p-2 w-full bg-gray-100'
        onChange={searchHandler}
        type='text'
        placeholder='Search...'
      />
    </div>
  )
}

export default DropdownSearch
