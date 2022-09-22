import { Link, NavLink, Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import './App.css';
import Home from './home';
import Book from './book';
import BookList from './bookList';
import NewBook from './newBook';
import NotFound from './404';
import BookLayout from './bookLayout/bookLayout';

function App() {
  const location = useLocation()
  console.log('aaaaaaaa', location)
  const element = useRoutes([
    {
        path:"/",
        element:<Home/>,
        

    },{
      path:"/book/*",
      element:<BookList/>
    },
    {
      path:"*",
      element:<NotFound/>
    }
])
  return (
    <div className="App">
      {/* <Routes location={"/book"}>
        <Route path="/" element={<Home/>} />  
        <Route path="/book" element={<h1>Hey!</h1>} />  
      </Routes> */}
      <nav>
        <ul>
          <li>
            <Link to={"/"} state="hiii">Home</Link>
          </li>
          <li>
            <NavLink style={({isActive}) => ({color:isActive ? "yellow":"red"})} to={"/book/2"} state="hiii Book">Book </NavLink>
          </li>
        </ul>
      </nav>
      {/* <Routes> */}
        {/* takes jsx as element */}
        {/* <Route path="/" element={<Home/>} />   */}
        {/* <Route element={<BookLayout />}>
          define index
          <Route index element={<BookList/>} />
          <Route path=":id" element={<Book/>} />
          <Route path="new" element={<NewBook/>} />
        </Route> */}
        {/* <Route path="/book" element={<BookLayout />}>
          define index = parent path
          <Route index element={<BookList/>} />
          <Route path=":id" element={<Book/>} />
          <Route path="new" element={<NewBook/>} />
        </Route> */}
        {/* <Route path="/book" element={<BookList />} />
        parse top->bottom and get best match not first
        <Route path="/book/:id" element={<Book/>} /> 
        <Route path="/book/new" element={<NewBook/>} /> 
        Match anything */}
        {/* <Route path="/book/*" element={<BookList/>}/> */}
        {/* <Route path="*" element={<NotFound />} />  */}
        {/* <Route /> */}
      {/* </Routes> */}
      {element}
    </div>
  );
}

export default App;
