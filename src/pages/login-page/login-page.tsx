import { FormEvent, ReactEventHandler, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

import Header from '../../components/header/header';
import RandomCityButton from '../../components/random-city-button/random-city-button';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';

type ChangeHandler = ReactEventHandler<HTMLInputElement>;

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleFieldChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const authData: AuthData = {
      login: formData.email,
      password: formData.password
    };
    toast.promise(
      dispatch(loginAction(authData)).unwrap(),
      {
        pending: 'Logging in',
        error: 'Error to login'
      }
    );
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 Cities : Login page</title>
      </Helmet>
      <Header></Header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmitForm} className="login__form form" action="">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  onChange={handleFieldChange}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  onChange={handleFieldChange}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  pattern="^(?=.*[a-zA-Z])(?=.*\d).+$"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <RandomCityButton />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
