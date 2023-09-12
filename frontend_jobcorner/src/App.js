import { Route, Routes } from 'react-router-dom';
import Header from './component/Header'
import Home from './component/Home'
import Jobs from './component/Jobs'
import AdminEdit from './component/AdminEdit'
import './App.css';

function App() {
  return (
    <>
     <Header />
     <Routes>
        <Route exact path='/' element={ <Home/>} />
        <Route exact path='/jobs' element={<Jobs/>} />
        <Route exact path='/admin-edit' element={<AdminEdit/>} />
      </Routes>
    </>
  );
}

export default App;
