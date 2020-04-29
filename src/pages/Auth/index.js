import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { useAxios, useLocalStorage } from 'hooks';
import { REGISTER, LOGIN, HOME } from 'constants/routes';
import { CurrentUserContext } from 'contexts';
import { ErrorMessages } from 'components';

export const Auth = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === LOGIN;
  const apiUrl = isLogin ? 'users/login' : 'users';
  const [isSubmitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [{isLoading, response, errors}, doFetch] = useAxios(apiUrl);
  const [ , setToken] = useLocalStorage('auth-token');
  const [ , setCurrentUserState] = useContext(CurrentUserContext);
  
  useEffect(() => {    
    if (response) {
      setToken(response.user.token);
      setCurrentUserState(state => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: response.user
      }));
      setSubmitted(true);
    }
  }, [response, setToken, setCurrentUserState])

  const pageText = isLogin ? 'Sign In' : 'Sign Up';
  const descriptionText = isLogin ? 'Need an account?' : 'Have an account?';
  const descriptionLink = isLogin ? REGISTER : LOGIN;
  
  const handleEmail = ({target: { value }}) => setEmail(value);
  const handlePassword = ({target: { value }}) => setPassword(value);
  const handleUsername = ({target: { value }}) => setUsername(value);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const user = isLogin ? { email, password } : { username, email, password };
    
    doFetch({
      method: 'POST',
      data: { user }
    })
  };

  if (isSubmitted) {
    return <Redirect to={HOME} />;
  }
  
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{pageText}</h1>
            <p className="text-xs-center">
              <Link to={descriptionLink}>{descriptionText}</Link>
            </p>
            <form onSubmit={handleSubmit}>
              { errors && <ErrorMessages errors={errors.errors} /> }
              <fieldset>
                { !isLogin && (
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      value={username}
                      onChange={handleUsername}
                    />
                  </fieldset>
                ) }
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
                  disabled={isLoading}
                >
                  {pageText}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
