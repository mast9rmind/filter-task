import React, { useState, createContext, useReducer, useMemo } from 'react'
import { users, tasks, fields } from './data'

const DataContext = createContext()

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'FILTERED_DROPDOWN':
      return { ...state, filteredDropdown: state.filteredDropdown }
    case 'SELECTED_FILTERED_DROPDOWN':
      return { ...state, selectedFilteredDropdown: action.value }
    case 'FILTERED_SUBDROPDOWN':
      return { ...state, filteredSubDropdown: action.value }
    case 'SELECTED_FILTERED_SUBDROPDOWN':
      return { ...state, selectedFilteredSubDropdown: action.value }
    default:
      return state
  }
}

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'DROPDOWN_SEARCH':
      return { ...state, dropdownSearch: action.value }
    case 'DESCRIPTION_SEARCH':
      return { ...state, descriptionSearch: action.value }
    default:
      return state
  }
}

const isBooleanReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ISSHOW':
      return { ...state, isShow: action.isValid }
    case 'SET_ISVISIBLE':
      return { ...state, isVisible: action.isValid }
    default:
      return { isValid: false }
  }
}

const initialState = {
  user: users,
  task: tasks,
  count: 0
}

export const DataProvider = props => {
  const { children } = props

  const [state, setState] = useState(initialState)

  const [filterState, dispatchFilter] = useReducer(filterReducer, {
    filteredDropdown: fields,
    selectedFilteredDropdown: [],
    filteredSubDropdown: [],
    selectedFilteredSubDropdown: []
  })

  const [searchState, dispatchSearch] = useReducer(searchReducer, {
    dropdownSearch: '',
    descriptionSearch: ''
  })

  const [isBooleanState, dispatchIsBoolean] = useReducer(isBooleanReducer, {
    isShow: false,
    isVisible: false
  })

  const value = useMemo(() => {
    return {
      ...state,
      setState,
      filterState,
      dispatchFilter,
      searchState,
      dispatchSearch,
      isBooleanState,
      dispatchIsBoolean
    }
  }, [filterState, isBooleanState, searchState, state])

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default DataContext
