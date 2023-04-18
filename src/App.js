import React, { useContext} from "react";
import DataContext from './components/store/list-context';
import FilterCard from './components/filter/FilterCard';
import SelectedFilters from './components/filter/SelectedFilters';
import DataList from './components/list/DataList';

function App() {
  const { count } = useContext(DataContext);

  console.log(count)

  return (
    <div className="p-16 grid gap-3">
      <FilterCard />
      <div className="flex flex-wrap gap-4">
      { [...Array(count)].map((_, i) => <SelectedFilters key={i}/>) }
      </div>
      <DataList />
    </div>
  );
}

export default App;
