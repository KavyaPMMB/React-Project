import {BrowserRouter,Routes,Route} from 'react-router-dom'

import AddBookForm from './Components/AddBookForm';
import BookTable from './Components/BookTable';
import EditBookForm from './Components/EditBookForm';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import SignUp from './Components/SignUp';
import ViewBook from './Components/ViewBook';
import ClientTable from './Components/ClientTable';
import AddClient from './Components/AddClient';
import ViewClient from './Components/ViewClient';
import EditClientForm from './Components/EditClientForm';
import './App.css'
import CustomerTable from './Components/CustomerTable';
import AddCustomer from './AddCustomer';
import ViewCustomer from './Components/ViewCustomer';
import EditCustomer from './Components/EditCustomer';
import { ToastContainer } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<NavBar/>}/>
      <Route path="/Login.js" element={<><NavBar/><Login/></>}/>
      <Route path="/SignUp.jsx" element={<><NavBar/><SignUp/></>}/>
      <Route path="/BookTable.js" element={<><BookTable /></>}/>
      <Route path="/AddBookForm.js" element={<><AddBookForm/></>}/>
      <Route path="/SideBar.js" element={<><SideBar/></>}/>
      <Route path="/ViewBook.js/:_id" element={<><ViewBook/></>}/>
      <Route path="/ViewClient.js/:_id" element={<><ViewClient/></>}/>
      <Route path="/ViewCustomer.js/:_id" element={<><ViewCustomer/></>}/>

      <Route path="/EditBookForm.js/:_id" element={<><EditBookForm/></>}/>
      <Route path="/EditClientForm.js/:_id" element={<><EditClientForm/></>}/>
      <Route path="/EditCustomer.js/:_id" element={<><EditCustomer/></>}/>

      <Route path="/AddClient.js" element={<><AddClient/></>}/>
      <Route path="/CustomerTable.js" element={<CustomerTable/>}/>
      <Route path="/ClientTable.js" element={<ClientTable/>}/>

              
      <Route path='/AddCustomer.js' element={<AddCustomer/>}/>

          

      </Routes>
      </BrowserRouter>
  
      <ToastContainer/>
      
    </div>
  );
}

export default App;
