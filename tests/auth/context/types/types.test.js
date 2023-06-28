import { types } from '../../../../src/auth/types/types.js';

describe('Pruebas en "Types.js"', () => {
  test('Debe regresar estos types', () => {
    expect(types).toEqual({ login: '[Auth] Login', logout: '[Auth] Logout' });
  });
});
