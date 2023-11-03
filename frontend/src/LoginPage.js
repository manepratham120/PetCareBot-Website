import React, { useState } from 'react';
import Header from './Header';
import './LoginPage.css';
import axios from 'axios';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  

  return (
    <div>
      <Header />
      <div className="LoginPage">
        <div className="main">Welcome Back</div>
        <form >
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="field is-grouped is-grouped-right">
            <p className="control">
              <button type="submit" className="button is-primary">
                Submit
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}