import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { CheckinForm } from './CheckinForm';

describe('CheckinForm', () => {
    describe('on submit', () => {
      it('dispatches checkin credentials', async () => {
        const mockDispatch = jest.fn();
        const { getByLabelText, getByText } = render(
          <CheckinForm useDispatchHook={() => mockDispatch} />
        );

        const emailInput = getByLabelText('Адрес электронной почты');
        const firstNameInput = getByLabelText('Имя');
        const lastNameInput = getByLabelText('Фамилия');
        const passwordInput = getByLabelText('Пароль');
  
        await act(async () => {
          fireEvent.change(emailInput, { target: { value: 'testemail@email.com' } });
          fireEvent.change(firstNameInput, { target: { value: 'testname' } });
          fireEvent.change(lastNameInput, { target: { value: 'testsurname' } });
          fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
          fireEvent.click(getByText('Зарегистрироваться'));
        });
  
        expect(mockDispatch).toBeCalledWith({
          payload: { email: 'testemail@email.com', firstName: 'testname', lastName: 'testsurname', password: 'testpassword' },
          type: 'CHECKIN',
        });
      });
    });
});
 