import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import NoCardModal from './NoCardModal';
 
const mockStore = {
    getState: () => ({auth: {isLoggedIn: true}}),
    subscribe: () => {},
    dispatch: () => {}
}   

describe('NoCardModal', () => {
    describe('when clicked on button', () => {
        it('opens the profile page', () => {
          window.location= jest.fn();
          const {getByText} = render(
            <BrowserRouter>
                <Provider store={mockStore}>
                    <NoCardModal />
                </Provider>
            </BrowserRouter>
          );

          fireEvent.click(getByText('Перейти в профиль'));
          expect(window.location.pathname).toBe('/profile');
        });
    })
})
