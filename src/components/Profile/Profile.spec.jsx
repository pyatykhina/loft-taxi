import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Profile from './index';

describe('Profile', () => {
    it('renders correctly', () => {
        const { container } = render(<BrowserRouter><Profile /></BrowserRouter>);
        expect(container.innerHTML).toMatch('Profile');
    })
})
