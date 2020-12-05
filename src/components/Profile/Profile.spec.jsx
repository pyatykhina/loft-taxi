import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Profile from './index';

describe('Profile', () => {
    it('renders correctly', () => {
        const mockStore = {
            getState: () => ({auth: {isLoggedIn: false}}),
            subscribe: () => {},
            dispatch: () => {}
        }         
        const {container} = render(
            <BrowserRouter>
                <Provider store={mockStore}>
                    <Profile />
                </Provider>
            </BrowserRouter>
        );
        expect(container.innerHTML).toMatch('Profile');
    })
})
