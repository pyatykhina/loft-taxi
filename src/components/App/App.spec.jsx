import React from 'react';
import { render  } from '@testing-library/react';
import App from './index';

jest.mock('../Login', () => ({ __esModule: true, default: () => <div>Login component</div> }));

describe('App', () => {
    it('renders correctly', () => {            
        const {container} = render(<App />);
        expect(container.innerHTML).toMatch('Login component');
    })
})
