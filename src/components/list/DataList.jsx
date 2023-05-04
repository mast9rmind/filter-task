import React, { useContext, useCallback, Fragment } from 'react'

import { Table } from 'flowbite-react'
import DataContext from '../context/DataProvider'

const DataList = () => {
  const { task, user, searchState, dispatchSearch, isBooleanState, dispatchIsBoolean, filterState } =
    useContext(DataContext)

  const updatedTaskObj = task.map(t => {
    const names = t['assignee id'].map(assigneeId => {
      const { name } = user.find(u => u.id === assigneeId)
      return name
    })
    return { ...t, names }
  })

  const filteredTasks =
    filterState.selectedFilteredSubDropdown.length > 0
      ? updatedTaskObj.filter(
          t =>
            filterState.selectedFilteredSubDropdown.includes(t.label) ||
            filterState.selectedFilteredSubDropdown.includes(t.priorities) ||
            t.names.some(name => filterState.selectedFilteredSubDropdown.includes(name))
        )
      : updatedTaskObj

  const searchFilter = filteredTasks.filter(t =>
    t.description.toLocaleLowerCase().includes(searchState.descriptionSearch)
  )

  const searchContentHandler = event => {
    dispatchSearch({
      type: 'DESCRIPTION_SEARCH',
      value: event.target.value
    })
  }

  // REVIEW : Add used variables to the dependencies
  const closeSearch = useCallback(
    () =>
      dispatchIsBoolean({
        type: 'SET_ISVISIBLE',
        isValid: false
      }),
    [dispatchIsBoolean]
  )

  return (
    <>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Task name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Priorities</Table.HeadCell>
          <Table.HeadCell>Label</Table.HeadCell>
          <Table.HeadCell>
            <span className='sr-only'>Assignee</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {filteredTasks.map(item => (
            <Table.Row key={item['assignee id']} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell className='font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {item['task name']}
              </Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{item.date}</Table.Cell>
              <Table.Cell>{item.priorities}</Table.Cell>
              <Table.Cell>{item.label}</Table.Cell>
              <Table.Cell>
                {/* REVIEW : Don't use array index as key */}
                {item.names.map(i => (
                  <span className='mx-2' key={}>
                    {i}
                  </span>
                ))}
              </Table.Cell>
            </Table.Row>
          )) &&
            searchFilter.map(item => (
              <Table.Row key={item['assignee id']} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell className='font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {item['task name']}
                </Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell>{item.priorities}</Table.Cell>
                <Table.Cell>{item.label}</Table.Cell>
                <Table.Cell>
                  {item.names.map(i => (
                    <span className='mx-2' key={i}>
                      {i}
                    </span>
                  ))}
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
      {isBooleanState.isVisible ? (
        <div className='grid gap-2 p-4 mx-auto my-8 border-gray-300 rounded-md shadow-xl w-fit shadow-gray-300 justify-items-end'>
          <button type='button' onClick={closeSearch}>
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
          <input
            onChange={searchContentHandler}
            type='text'
            placeholder='Search...'
            className='border-none focus:shadow-[0_0_rgba(0,0,0/0%)] p-2 w-full bg-gray-100 rounded-md'
          />
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default DataList
