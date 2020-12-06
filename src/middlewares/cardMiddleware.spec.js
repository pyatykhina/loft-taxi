import { cardMiddleware } from './cardMiddleware';
import { setCard, getCard } from '../actions';
import { serverSetCard, serverGetCard } from '../api';

jest.mock('../api', () => ({ 
    serverSetCard: jest.fn(() => true),
    serverGetCard: jest.fn(() => true)
}));

describe('authMiddleware', () => {
    describe('#SET_CARD', () => {
        it('set card data through api', async () => {
            serverSetCard.mockImplementation(async () => true);
            const dispatch = jest.fn();

            await cardMiddleware({ dispatch })()(
                setCard('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token')
            );

            expect(serverSetCard).toBeCalledWith('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token');
            expect(dispatch).toBeCalledWith({ type: 'SET_CARD_SUCCESS' });
        });
    });

    describe('#GET_CARD', () => {
        it('get card data through api', async () => {
            serverGetCard.mockImplementation(async () => true);
            const dispatch = jest.fn();

            await cardMiddleware({ dispatch })()(
                getCard('token')
            );

            expect(serverGetCard).toBeCalledWith('token');
            expect(dispatch).toBeCalledWith({ 
                type: 'GET_CARD_SUCCESS',
                payload: {
                    'cardNumber': undefined, 
                    'expiryDate': undefined, 
                    'cardName': undefined, 
                    'cvc': undefined
                }
            });
        });
    });
});
