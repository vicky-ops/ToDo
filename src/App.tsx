import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TodoList from './components/TodoList';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';

const App: React.FC = () => {
//   const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    // history('/login');
  };

  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Todo App
              </Typography>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
              <Button color="inherit" component={Link} to="/todos">
                Todos
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
        <Box flexGrow={1}>
          <Routes>
            <Route  path="/login" element={<Login/>}/>
            <Route  path="/register" element={<Register/>}/>
            <Route  path="/todos" element={ <TodoList />}/>
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;