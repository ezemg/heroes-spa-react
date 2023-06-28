import { fireEvent, render, screen } from '@testing-library/react';
import { SearchPage } from '../../../src/heroes/index.js';
import { MemoryRouter, useNavigate } from 'react-router-dom';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe mostrarse correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar a Batman y el input con el valor del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    );

    const inputBuscar = screen.getByRole('textbox');
    const img = screen.getByRole('img');
    const alertNoHero = screen.getByLabelText('alert-no-hero');

    expect(inputBuscar.value).toBe('batman');
    expect(img.src).toContain('batman');

    expect(alertNoHero.style.display).toBe('none');
  });

  test('Debe de mostrar error si no se encuentra el hero (batman123)', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    );

    const alertNoHero = screen.getByLabelText('alert-no-hero');
    expect(alertNoHero.style.display).toBe('');
  });

  test('Debe de llamar al navigate a la pantalla nueva', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    );

    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, {
      target: { name: 'searchText', value: 'superman' },
    });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman');

    screen.debug();
  });
});
