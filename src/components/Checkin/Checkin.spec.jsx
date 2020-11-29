import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkin from './index';

jest.mock('../Login', () => ({ Login: () => <div>Login component</div> }));

describe('Checkin', () => {
    it('renders correctly', () => {
        const { getByLabelText  } = render(<Checkin />);
        expect(getByLabelText('Адрес электронной почты')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Имя')).toHaveAttribute('name', 'firstName');
        expect(getByLabelText('Фамилия')).toHaveAttribute('name', 'lastName');
        expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password');
    })

    describe('when clicked on login button', () => {
        it('opens the login page', () => {
            const {getByText, container} = render(<Checkin />);

            fireEvent.click(getByText('Войти'));
            expect(container.innerHTML).toMatch('Login component');
        });
    })
})

