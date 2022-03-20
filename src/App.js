import './App.css';
import BasicTable from './components/BasicTable';
import ColumnHiding from './components/ColumnHiding';
import ColumnOrder from './components/ColumnOrder';
import FilterTable from './components/FilterTable';
import PaginationTable from './components/PaginationTable';
import RowSelection from './components/RowSelection';
import SortingTable from './components/SortingTable';
import StickyTable from './components/StickyTable';

function App() {
  return (
    <div className="App">
     <StickyTable />
    </div>
  );
}

export default App;
