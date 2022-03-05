import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import HomePage1 from './Pages/SupplierSignIn/HomePage1';
// import HomePage3 from './Pages/CustomerSignIn/HomePage3';
import Dashboard from './Pages/Dashboard/Dashboard';
// import SignIn from './Pages/signin/SignIn';
import {BrowserRouter, Route , Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <Routes>
       {/* <Route path='/' element = { <HomePage1 /> } />
       <Route path ='/home3' element = {<HomePage3 />} />
       <Route path ='/signin' element = {<SignIn />} />     */}
       <Route path = '/' element = { <Dashboard /> } />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
