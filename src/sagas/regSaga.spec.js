import { registrationSaga } from './regSaga';
import { recordSaga } from './recordSaga';
import { checkin } from '../actions';
import { serverCheckin } from '../api';

jest.mock('../api', () => ({ 
  serverCheckin: jest.fn(() => true)
}));

describe('regSaga', () => {
    describe('#CHECKIN', () => {
      it('registrates through api', async () => {
        serverCheckin
        .mockImplementation(async () => true);
        const dispatched = await recordSaga(
            registrationSaga,
            checkin('testlogin', 'testfirstname', 'testlastname', 'testpassword')
        )
        expect(dispatched).toEqual([{ 
          type: 'LOG_IN',
          payload: {
              'token': true
          } 
        }, { 
          type: 'GET_CARD',
          payload: {
              'token': true
          } 
        }, { 
          type: 'GET_ADDRESS'
        }])
      });
    });
});  
