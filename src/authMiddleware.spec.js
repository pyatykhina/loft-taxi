import { authMiddleware } from './authMiddleware';
import { authenticate, checkin } from './actions';
import { serverLogin, serverCheckin } from './api';

jest.mock('./api', () => ({ 
  serverLogin: jest.fn(() => true),
  serverCheckin: jest.fn(() => true)
}));

describe('authMiddleware', () => {
  describe('#AUTHENTICATE', () => {
    it('authenticates through api', async () => {
      serverLogin.mockImplementation(async () => true);
      const dispatch = jest.fn();

      await authMiddleware({ dispatch })()(
        authenticate('testlogin', 'testpassword')
      );

      expect(serverLogin).toBeCalledWith('testlogin', 'testpassword');
      expect(dispatch).toBeCalledWith({ type: 'LOG_IN' });
    });
  });

  describe('#CHECKIN', () => {
    it('authenticates through api', async () => {
      serverCheckin.mockImplementation(async () => true);
      const dispatch = jest.fn();

      await authMiddleware({ dispatch })()(
        checkin('testlogin', 'testfirstname', 'testlastname', 'testpassword')
      );

      expect(serverCheckin).toBeCalledWith('testlogin', 'testfirstname', 'testlastname', 'testpassword');
      expect(dispatch).toBeCalledWith({ type: 'LOG_IN' });
    });
  });
});
