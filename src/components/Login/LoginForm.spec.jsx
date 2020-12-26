import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
    describe('on submit', () => {
      it('dispatches log in credentials', async () => {
        const mockDispatch = jest.fn();
        const { getByLabelText, getByText } = render(
          <LoginForm useDispatchHook={() => mockDispatch} />
        );

        const emailInput = getByLabelText('Имя пользователя');
        const passwordInput = getByLabelText('Пароль');
  
        await act(async () => {
          fireEvent.change(emailInput, { target: { value: 'testemail@email.com' } });
          fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
          fireEvent.click(getByText('Войти'));
        });
  
        expect(mockDispatch).toBeCalledWith({
          payload: { email: 'testemail@email.com', password: 'testpassword' },
          type: 'AUTHENTICATE',
        });
      });
    });
});
 