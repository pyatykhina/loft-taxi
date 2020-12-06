import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Profile from './index';
 
const mockStore = {
    getState: () => ({auth: {isLoggedIn: true}}),
    subscribe: () => {},
    dispatch: () => {}
}   

describe('Profile', () => {
    it('renders correctly', () => {
      const { getByLabelText  } = render(
        <BrowserRouter>
            <Provider store={mockStore}>
                <Profile />
            </Provider>
        </BrowserRouter>
      );
      expect(getByLabelText('Номер карты:')).toHaveAttribute('name', 'cardNumber');
      expect(getByLabelText('Срок действия:')).toHaveAttribute('name', 'expiryDate');
      expect(getByLabelText('Имя владельца:')).toHaveAttribute('name', 'cardName');
      expect(getByLabelText('CVC:')).toHaveAttribute('name', 'cvc');
    })
})
