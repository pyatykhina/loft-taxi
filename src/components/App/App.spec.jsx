import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render  } from '@testing-library/react';
import App from './index';

jest.mock('../Login', () => ({ __esModule: true, default: () => <div>Login component</div> }));

describe('App', () => {
    it('renders correctly', () => {   
        const mockStore = {
            getState: () => ({auth: {isLoggedIn: false}}),
            subscribe: () => {},
            dispatch: () => {}
        }         
        const {container} = render(
            <BrowserRouter>
                <Provider store={mockStore}>
                    <App />
                </Provider>
            </BrowserRouter>
        );
        expect(container.innerHTML).toMatch('Login component');
    })
})
