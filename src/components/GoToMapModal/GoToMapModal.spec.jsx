import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import GoToMapModal from './GoToMapModal';
 
const mockStore = {
    getState: () => ({auth: {isLoggedIn: true}}),
    subscribe: () => {},
    dispatch: () => {}
}   

describe('GoToMapModal', () => {
    describe('when clicked on button', () => {
        it('opens the map page', () => {
          window.location= jest.fn();
          const {getByText} = render(
            <BrowserRouter>
                <Provider store={mockStore}>
                    <GoToMapModal />
                </Provider>
            </BrowserRouter>
          );

          fireEvent.click(getByText('Перейти к карте'));
          expect(window.location.pathname).toBe('/map');
        });
    })
})