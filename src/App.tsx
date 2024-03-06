import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';


const App: React.FC = () =>{
    return (
        <Router>
            <div>

                {/* Navigation */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Link</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                        <li>
                            <Link to='/todos'>Todos</Link>
                        </li>
                    </ul>
                    <Register/>
                </nav>

                <Routes>
                    {/* <Route path='/login'> */}
                        {/* <Login/> */}
                        {/* Login Component */}
                    {/* </Route> */}
                    <Route
                    path='login'
                    element={<Login/>}
                    />
                    <Route 
                    path='register' 
                    element={<Register/>}
                    />
                    <Route
                    path='todos'
                    // element={<T}
                    />
                    
                        {/* <Register/> */}
                        {/* Register */}
                   
                    {/* <Route path='/todos'> */}
                        {/* TodoList Component */} 
                    {/* </Route> */}
                </Routes>
            </div>

        </Router>
    )
}
export default App;