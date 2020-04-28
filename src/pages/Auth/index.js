import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { REGISTER } from 'constants/routes';
import { httpClient } from 'core/axios';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isSubmitting) {
      return;
    }

    login();
  });

  const handleEmail = ({target: { value }}) => setEmail(value);
  const handlePassword = ({target: { value }}) => setPassword(value);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
  };

  const login = () => {
    try {
      const result = httpClient.post('users/login', {
        user: { email, password }
      });
      console.log(result, 'result');
    } catch (error) {
      console.error(error, 'error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Login</h1>
            <p className="text-xs-center">
              <Link to={REGISTER}>Need an account?</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                  />
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                  disabled={isSubmitting}
                >
                  Sign In
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
