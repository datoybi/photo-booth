import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ReactNode } from 'react';
import App from '../App';

describe('App test', () => {
  // afterAll(() => {
  //   jest.clearAllMocks();
  // });

  test('app 테스트를 시작합니다', () => {
    renderWithRouter(<App />, { route: '/' });
  });
});

function renderWithRouter(Component: ReactNode, options: { route: string }) {
  return render(<MemoryRouter initialEntries={[options.route]}>{Component}</MemoryRouter>);
}
