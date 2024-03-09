import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TodoList from './components/TodoList';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';

const App: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('user');
    history.push('/login');
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
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/todos">
              <TodoList />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
};

export default App;