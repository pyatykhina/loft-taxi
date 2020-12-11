import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent  } from '@testing-library/react';
import Header from './index';

const mockStore = {
    getState: () => ({auth: {isLoggedIn: false}}),
    subscribe: () => {},
    dispatch: () => {}
}      

describe('Header', () => {
    it('renders correctly', () => {
        const {container} = render(
            <BrowserRouter>
                <Provider store={mockStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        expect(container.innerHTML).toMatch('');
    })

    describe('when clicked on navigation buttons', () => {
        it('opens the target page', () => {
            window.location= jest.fn();        
            const {getByText} = render(
                <BrowserRouter>
                    <Provider store={mockStore}>
                        <Header />
                    </Provider>
                </BrowserRouter>
            );

            fireEvent.click(getByText('Карта'));
            expect(window.location.pathname).toBe('/map');

            fireEvent.click(getByText('Профиль'));
            expect(window.location.pathname).toBe('/profile');
        });
    })
})
