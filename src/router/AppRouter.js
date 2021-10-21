import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import BooksContext from '../context/BooksContext';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);
	
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route component={BooksList} path="/" exact={true} />
              <Route component={AddBook} path="/add" />
              <Route component={EditBook} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </BooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
	
// 	return (
//     <BrowserRouter>
//       <div>
//         <Header />
//         <div className="main-content">
//           <Switch>
// 			<Route 
// 				render={(props) => (
// 					<BooksList {...props} books={books} setBooks={setBooks} />
// 				)}
// 				path="/"
// 				exact="true"
// 			/>
//             <Route 
// 				render={(props) => (
// 				  <AddBook {...props} books={books} setBooks={setBooks} />  
// 				)}
// 				path="/add" 
// 			/>
// 			<Route
// 				render={(props) => (
// 				  <EditBook  {...props} books={books} setBooks={setBooks} />
// 				)}
// 				path="/edit/:id"
// 			/>
// 			<Route component={() => <Redirect to="/" />} />
//           </Switch>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };