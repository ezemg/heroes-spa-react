import { authReducer } from '../../../src/auth/context/authReducer.js';
import { types } from '../../../src/auth/types/types.js';

describe('Pruebas en authReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    const initialState = authReducer({ logged: false }, {});

    expect(initialState).toEqual({ logged: false });
  });

  test('Debe de (login) llamar el login, autenticar y establecer el user', () => {
    const action = {
      type: types.login,
      payload: { name: 'Ezequiel', id: 123 },
    };

    const newState = authReducer({ logged: false }, action);
    expect(newState).toEqual({ logged: true, user: action.payload });
  });

  test('Debe de (logout) borrar el name del user y poner logged en false', () => {
    const state = {
      logged: true,
      user: {
        name: 'Ezequiel',
        id: 123,
      },
    };

    const action = { type: types.logout };

    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });
});
