import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserForm from './screen/user-form-screen';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <h1>User Form</h1>
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default App;
