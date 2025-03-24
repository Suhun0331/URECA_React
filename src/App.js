import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from './main/main';
import EmpList from './main/emp_list';
import EmpDetail from './main/emp_detail';
import EmpInsert from './main/emp_insert';
import EmpUpdate from './main/emp_update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={ <Main /> } />
          <Route path = '/emplist' element={ <EmpList /> } />
          <Route path = '/empdetail' element={ <EmpDetail /> } />
          <Route path = '/empinsert' element={ <EmpInsert /> } />
          <Route path = '/empupdate' element={ <EmpUpdate /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
