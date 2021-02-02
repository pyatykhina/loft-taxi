import { authenticateSaga } from './authSaga';
import { recordSaga } from './recordSaga';
import { authenticate } from '../actions';
import { serverLogin } from '../api';

jest.mock('../api', () => ({ 
  serverLogin: jest.fn(() => true)
}));

describe('authSaga', () => {
    describe('#AUTHENTICATE', () => {
      it('authenticates through api', async () => {
        serverLogin.mockImplementation(async () => true);
        const dispatched = await recordSaga(
            authenticateSaga,
            authenticate('testlogin', 'testpassword')
        )
        expect(dispatched).toEqual([{ 
          type: 'LOG_IN_ERROR',
          payload: undefined
        }])
      });
    });
});  
