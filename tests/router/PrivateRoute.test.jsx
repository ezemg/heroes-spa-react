import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/index.js';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '../../src/router/PrivateRoute.jsx';

describe('Pruebas en <PublicRoute />', () => {
  test('Debe mostrar children si  está autenticado', () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: { id: 'ABC', name: 'Juan Carlos' },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta Privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/search?q=batman'
    );
  });
});
