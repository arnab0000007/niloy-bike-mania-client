import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register'
import AuthProvider from './contexts/AuthProvider';
import ReviewProvider from './contexts/ProductProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Home/Footer/Footer';
import Contact from './Pages/Home/Contact/Contact';
import Products from './Pages/Home/Products/Products';
import Header from './Pages/Shared/Header/Header';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard.js'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ReviewProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/explore">
            <Header></Header>
              <Products length={20} page={'explore'}></Products>
            </Route>
            <Route path="/login">
              <Header></Header>
              <Login></Login>
            </Route>
            <Route path="/register">
            <Header></Header>
              <Register></Register>
            </Route>
             <PrivateRoute path="/book/:productId">
             <Header></Header>
              <Purchase></Purchase>
              </PrivateRoute> 
              <PrivateRoute path="/dashboard"> 
              <Dashboard></Dashboard>
              </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </ReviewProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
