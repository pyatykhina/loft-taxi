import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Checkin from './index';
 
const mockStore = {
    getState: () => ({auth: {isLoggedIn: true}}),
    subscribe: () => {},
    dispatch: () => {}
}      

describe('Checkin', () => {
    it('renders correctly', () => {
        const { getByLabelText  } = render(
            <BrowserRouter>
                <Provider store={mockStore}>
                    <Checkin />
                </Provider>
            </BrowserRouter>
        );
        expect(getByLabelText('Адрес электронной почты*')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Имя*')).toHaveAttribute('name', 'firstName');
        expect(getByLabelText('Фамилия*')).toHaveAttribute('name', 'lastName');
        expect(getByLabelText('Пароль*')).toHaveAttribute('name', 'password');
    })

    describe('when clicked on login button', () => {
        it('opens the login page', () => {
            window.location= jest.fn();
            const {getByText} = render(
                <BrowserRouter>
                    <Provider store={mockStore}>
                        <Checkin />
                    </Provider>
                </BrowserRouter>
            );
            
            fireEvent.click(getByText('Войти'));
            expect(window.location.pathname).toBe('/');
        });
    })

    describe('when logged in', () => {
      it('clicked on the checkin button', () => {
        window.location= jest.fn();
        render(
          <BrowserRouter>
              <Provider store={mockStore}>
                  <Checkin isLoggedIn />
              </Provider>
          </BrowserRouter>
        );
        expect(window.location.pathname).toBe('/map');
      });
    });
})

