import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { ProfileForm } from './ProfileForm';

describe('ProfileForm', () => {
    describe('on submit', () => {
      it('dispatches card credentials', async () => {
        const mockDispatch = jest.fn();
        const updateCardData = jest.fn();
        const { getByLabelText, getByText } = render(
          <ProfileForm updateCardData={updateCardData} useDispatchHook={() => mockDispatch} />
        );

        const cardNumberInput = getByLabelText('Номер карты:');
        const expiryDateInput = getByLabelText('Срок действия:');
        const cardNameInput = getByLabelText('Имя владельца:');
        const cvcInput = getByLabelText('CVC:');
  
        await act(async () => {
          fireEvent.change(cardNumberInput, { target: { value: '0000 0000 0000 0000' } });
          fireEvent.change(expiryDateInput, { target: { value: '00/00' } });
          fireEvent.change(cardNameInput, { target: { value: 'USER NAME' } });
          fireEvent.change(cvcInput, { target: { value: '000' } });
          fireEvent.click(getByText('Сохранить'));
        });
  
        expect(mockDispatch).toBeCalledWith({
          payload: { cardNumber: '0000 0000 0000 0000', expiryDate: '00/00', cardName: 'USER NAME', cvc: '000' },
          type: 'SET_CARD',
        });
      });
    });
});
 