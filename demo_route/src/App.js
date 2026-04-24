import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Students from './pages/Students'
import StudentDetails from './pages/StudentDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <nav style={{display: "flex", gap: "10px"}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/students"}>Students</Link>
      </nav>

      <div className='container'>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/students' element={<Students />}></Route>
        <Route path='/students/:id' element={<StudentDetails />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
