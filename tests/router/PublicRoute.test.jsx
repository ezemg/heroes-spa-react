import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute.jsx';
import { AuthContext } from '../../src/auth/index.js';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('Pruebas en <PublicRoute/>', () => {
  test('Debe de mostrar el children si no esta autenticado', () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta Publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    // screen.debug();
    expect(screen.getByText('Ruta Publica')).toBeTruthy();
  });
  test('Debe navegar si está autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 5,
        name: 'John',
      },
    };
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route
                path="login"
                element={<h1>Ruta Publica</h1>}
              />
            </Route>
            <Route
              path="marvel"
              element={<h1>Página marvel</h1>}
            />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
      //   <AuthContext.Provider value={contextValue}>
      //     <MemoryRouter initialEntries={["/login"]}>
      //       <Routes>
      //         <Route
      //           path="login"
      //           element={
      //             <PublicRoute>
      //               <h1>Ruta Publica</h1>
      //             </PublicRoute>
      //           }
      //         ></Route>
      //         <Route path="marvel" element={<h1>Página marvel</h1>}></Route>
      //       </Routes>
      //     </MemoryRouter>
      //   </AuthContext.Provider>
    );
    // screen.debug();
    expect(screen.getByText('Página marvel')).toBeTruthy();
  });
});
