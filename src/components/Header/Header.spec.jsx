import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent  } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
    it('renders correctly', () => {
        const {container} = render(<BrowserRouter><Header /></BrowserRouter>);
        expect(container.innerHTML).toMatch('');
    })

    describe('when clicked on navigation buttons', () => {
        it('opens the target page', () => {
            window.location= jest.fn();        
            const {getByText} = render(<BrowserRouter><Header isLoggedIn /></BrowserRouter>);

            fireEvent.click(getByText('Карта'));
            expect(window.location.pathname).toBe('/map');

            fireEvent.click(getByText('Профиль'));
            expect(window.location.pathname).toBe('/profile');
        });
    })
})
