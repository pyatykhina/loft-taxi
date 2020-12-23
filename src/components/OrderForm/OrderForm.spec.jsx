import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import OrderForm from './index';
 
const mockStore = {
    getState: () => ({addresses: {addresses: []}}),
    subscribe: () => {},
    dispatch: () => {}
}   

describe('OrderForm', () => {
    it('renders correctly', () => {
      const { getByLabelText  } = render(
        <BrowserRouter>
            <Provider store={mockStore}>
                <OrderForm />
            </Provider>
        </BrowserRouter>
      );
      expect(getByLabelText('Откуда:')).toHaveAttribute('name', 'src');
      expect(getByLabelText('Куда:')).toHaveAttribute('name', 'dest');
    })
})
