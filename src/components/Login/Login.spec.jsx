import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Login from './index';
 
const mockStore = {
    getState: () => ({auth: {isLoggedIn: true}}),
    subscribe: () => {},
    dispatch: () => {}
}   

describe('Login', () => {
    it('renders correctly', () => {
      const { getByLabelText  } = render(
        <BrowserRouter>
            <Provider store={mockStore}>
                <Login />
            </Provider>
        </BrowserRouter>
      );
      expect(getByLabelText('Имя пользователя*')).toHaveAttribute('name', 'email');
      expect(getByLabelText('Пароль*')).toHaveAttribute('name', 'password');
    })

    describe('when clicked on checkin button', () => {
        it('opens the checkin page', () => {
          window.location= jest.fn();
          const {getByText} = render(
            <BrowserRouter>
                <Provider store={mockStore}>
                    <Login />
                </Provider>
            </BrowserRouter>
          );

          fireEvent.click(getByText('Зарегистрируйтесь'));
          expect(window.location.pathname).toBe('/checkin');
        });
    })

    describe('when logged in', () => {
      it('clicked on the login button', () => {
        window.location= jest.fn();
        render(
          <BrowserRouter>
              <Provider store={mockStore}>
                  <Login isLoggedIn />
              </Provider>
          </BrowserRouter>
        );
        expect(window.location.pathname).toBe('/map');
      });
    });
})
