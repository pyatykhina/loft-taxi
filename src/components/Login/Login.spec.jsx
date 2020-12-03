import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Login from './index';

describe('Login', () => {
    it('renders correctly', () => {
      const { getByLabelText  } = render(<BrowserRouter><Login /></BrowserRouter>);
      expect(getByLabelText('Имя пользователя')).toHaveAttribute('name', 'email');
      expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password');
    })

    describe('when clicked on checkin button', () => {
        it('opens the checkin page', () => {
          window.location= jest.fn();
          const {getByText} = render(<BrowserRouter><Login /></BrowserRouter>);

          fireEvent.click(getByText('Зарегистрируйтесь'));
          expect(window.location.pathname).toBe('/checkin');
        });
    })

    describe("when logged in", () => {
      it("clicked on the login button", () => {
        window.location= jest.fn();
        render(<BrowserRouter><Login isLoggedIn /></BrowserRouter>);
        expect(window.location.pathname).toBe('/map');
      });
    });
})
