import React, { useContext } from 'react'
import DataContext from './components/context/DataProvider'
import FilterCard from './components/filter/FilterCard'
import SelectedFilters from './components/filter/SelectedFilters'
import DataList from './components/list/DataList'

const App = () => {
  const { count } = useContext(DataContext)

  return (
    <div className='grid gap-3 p-16'>
      <FilterCard />
      <div className='flex flex-wrap gap-4'>
        {/* REVIEW : Don't use array index in keys */}
        {[...Array(count)].map(i => (
          <SelectedFilters key={} />
        ))}
      </div>
      <DataList />
    </div>
  )
}

export default App
