import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkin from './index';

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
            const navigate = jest.fn();
            const {getByText, container} = render(<Checkin navigate={navigate} />);

            fireEvent.click(getByText('Войти'));
            expect(navigate).toHaveBeenCalledWith('login');
        });
    })
})

