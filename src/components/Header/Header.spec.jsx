import React from 'react';
import { render, fireEvent  } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
    it('renders correctly', () => {
        const {container} = render(<Header />);
        expect(container.innerHTML).toMatch('');
    })

    describe('when clicked on navigation buttons', () => {
        it('opens the target page', () => {
            const navigate = jest.fn();
            const {getByText, container} = render(<Header navigate={navigate} isLoggedIn />);

            fireEvent.click(getByText('Карта'));
            expect(navigate).toHaveBeenCalledWith('map');

            fireEvent.click(getByText('Профиль'));
            expect(navigate).toHaveBeenCalledWith('profile');
        });
    })
})
