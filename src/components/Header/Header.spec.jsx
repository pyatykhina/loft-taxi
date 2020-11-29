import React from 'react';
import { render, fireEvent  } from '@testing-library/react';
import Header from './index';

jest.mock('../Login', () => ({ Login: () => <div>Login component</div> }));
jest.mock('../Checkin', () => ({ Checkin: () => <div>Checkin component</div> }));
jest.mock('../Map', () => ({ Map: () => <div>Map component</div> }));
jest.mock('../Profile', () => ({ Profile: () => <div>Profile content</div> }));

describe('Header', () => {
    it('renders correctly', () => {
        const {container} = render(<Header />);
        expect(container.innerHTML).toMatch('');
    })

    describe('when clicked on navigation buttons', () => {
        it('opens the target page', () => {
            const {getByText, container} = render(<Header isLoggedIn />);

            fireEvent.click(getByText('Карта'));
            expect(container.innerHTML).toMatch('Map component');

            fireEvent.click(getByText('Профиль'));
            expect(container.innerHTML).toMatch('Profile component');
        });
    })
})
