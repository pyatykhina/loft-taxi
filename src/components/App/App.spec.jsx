import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
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
            <HashRouter>
                <Provider store={mockStore}>
                    <App />
                </Provider>
            </HashRouter>
        );
        expect(container.innerHTML).toMatch('Login component');
    })
})
