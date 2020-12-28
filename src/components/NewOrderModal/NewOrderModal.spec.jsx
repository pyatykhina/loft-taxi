import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import NewOrderModal from './NewOrderModal';
 
const mockStore = {
    getState: () => ({auth: {isLoggedIn: true}}),
    subscribe: () => {},
    dispatch: () => {}
}   

describe('NewOrderModal', () => {
    describe('when clicked on button', () => {
        it('opens the order form', () => {
          window.location= jest.fn();
          const makeOrder = jest.fn();
          const {getByText} = render(
            <BrowserRouter>
                <Provider store={mockStore}>
                    <NewOrderModal makeOrder={makeOrder} />
                </Provider>
            </BrowserRouter>
          );

          fireEvent.click(getByText('Новый заказ'));
          expect(makeOrder).toHaveBeenCalledWith(false);
        });
    })
})
