import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './index';

jest.mock('../Checkin', () => ({ Checkin: () => <div>Checkin component</div> }));

describe('Login', () => {
    it('renders correctly', () => {
        const { getByLabelText  } = render(<Login />);
        expect(getByLabelText('Имя пользователя')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password');
    })

    describe('when clicked on checkin button', () => {
        it('opens the checkin page', () => {
            const {getByText, container} = render(<Login isLoggedIn/>);

            fireEvent.click(getByText('Зарегистрируйтесь'));
            expect(container.innerHTML).toMatch('Checkin component');
        });
    })

    describe("when logged in", () => {
      it("renders profile link", () => {
        const { getByText } = render(<Login isLoggedIn />);
        expect(getByText("Перейти к карте")).toBeInTheDocument()
      });
    });
})
