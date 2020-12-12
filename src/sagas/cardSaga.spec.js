import { setCardSaga, getCardSaga } from './cardSaga';
import { recordSaga } from './recordSaga';
import { setCard, getCard } from '../actions';
import { serverSetCard, serverGetCard } from '../api';

jest.mock('../api', () => ({ 
    serverSetCard: jest.fn(() => true),
    serverGetCard: jest.fn(() => true)
}));

describe('cardSaga', () => {
    describe('#SET_CARD', () => {
      it('set card data through api', async () => {
        serverSetCard
        .mockImplementation(async () => true);
        const dispatched = await recordSaga(
            setCardSaga,
            setCard('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token')
        )
        expect(dispatched).toEqual([{ type: 'SET_CARD_SUCCESS' }])
      });
    });

    describe('#GET_CARD', () => {
        it('get card data through api', async () => {
          serverGetCard
          .mockImplementation(async () => true);
          const dispatched = await recordSaga(
              getCardSaga,
              getCard('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token')
          )
          expect(dispatched).toEqual([{ 
            type: 'GET_CARD_SUCCESS',
            payload: {
                'cardNumber': undefined, 
                'expiryDate': undefined, 
                'cardName': undefined, 
                'cvc': undefined
            }
           }])
        });
      });
});  
