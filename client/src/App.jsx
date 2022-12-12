import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';
import UserEdit from './components/UserEdit/UserEdit';
import SignOut from './components/Forms/SignOut/SignOut';
import Nav from './components/Nav/Nav';
import SignUp from './components/Forms/SignUp/SignUp';
import SignIn from './components/Forms/SignIn/SignIn';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import Main from './components/Main/Main';
import { checkAuth } from './redux/actions/userAction';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <>
      <Nav />
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<PrivateRoute user={user}><Main /></PrivateRoute>} />
          <Route path="/users" element={<PrivateRoute user={user}><UserList /></PrivateRoute>} />
          <Route path="/users/:id" element={<PrivateRoute user={user}><UserDetail /></PrivateRoute>} />
          <Route path="/user/edit" element={<PrivateRoute user={user}><UserEdit /></PrivateRoute>} />
          <Route path="/auth/signout" element={<PrivateRoute user={user}><SignOut /></PrivateRoute>} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
