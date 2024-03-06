import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


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
                </nav>

                <Routes>
                    <Route path='/login'>
                        {/* <Login/> */}
                        Login Component
                    </Route>
                    <Route path='/register'>
                        Register Component
                    </Route>
                    <Route path='/todos'>
                        TodoList Component
                    </Route>
                </Routes>
            </div>

        </Router>
    )
}
export default App;