import { routeSaga } from './routeSaga';
import { recordSaga } from './recordSaga';
import { getRoute } from '../actions';
import { serverGetRoute } from '../api';

jest.mock('../api', () => ({ 
    serverGetRoute: jest.fn(() => {})
}));

describe('routeSaga', () => {
    describe('#GET_ROUTE', () => {
      it('get route through api', async () => {
        serverGetRoute.mockImplementation(async () => true);
        const dispatched = await recordSaga(
            routeSaga,
            getRoute('address1', 'address2')
        )
        expect(dispatched).toEqual([{ 
          type: 'GET_ROUTE_SUCCESS',
          payload: {
            'route': {}
          } 
        }])
      });
    });
});  
