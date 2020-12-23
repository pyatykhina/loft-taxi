import { addressListSaga } from './addressListSaga';
import { recordSaga } from './recordSaga';
import { getAddress } from '../actions';
import { serverGetAddress } from '../api';

jest.mock('../api', () => ({ 
    serverGetAddress: jest.fn(() => {})
}));

describe('addressListSaga', () => {
    describe('#GET_ADRESSES', () => {
      it('get addresses through api', async () => {
        serverGetAddress.mockImplementation(async () => true);
        const dispatched = await recordSaga(
            addressListSaga,
            getAddress()
        )
        expect(dispatched).toEqual({ 
          type: 'GET_ADDRESS_SUCCESS',
          payload: [] 
        })
      });
    });
});  
