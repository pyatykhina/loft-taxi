import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Checkin from './index';

describe('Checkin', () => {
    it('renders correctly', () => {
        const { getByLabelText  } = render(<BrowserRouter><Checkin /></BrowserRouter>);
        expect(getByLabelText('Адрес электронной почты')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Имя')).toHaveAttribute('name', 'firstName');
        expect(getByLabelText('Фамилия')).toHaveAttribute('name', 'lastName');
        expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password');
    })

    describe('when clicked on login button', () => {
        it('opens the login page', () => {
            window.location= jest.fn();
            const {getByText} = render(<BrowserRouter><Checkin /></BrowserRouter>);

            fireEvent.click(getByText('Войти'));
            expect(window.location.pathname).toBe('/');
        });
    })
})

