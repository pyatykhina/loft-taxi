import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { AuthProvider, AuthContext} from './AuthContext';

describe('AuthContext', () => {
    describe('#logIn', () => {
        it('sets isLoggedIn to true', () => {
            let isLoggedIn;
            let logIn;

            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn;
                            logIn = value.logIn;
                            return null;
                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            )

            expect(isLoggedIn).toBe(false);
            act(() => {
                logIn('test@test.com', '123123');
            })
            expect(isLoggedIn).toBe(true);
        })
    })

    describe('#logOut', () => {
        it('sets isLoggedIn to false', () => {
            let isLoggedIn;
            let logOut;

            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn;
                            logOut = value.logOut;
                            return null;
                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            )

            act(() => {
                logOut();
            })
            expect(isLoggedIn).toBe(false);
        })
    })
})
