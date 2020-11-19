import React from 'react';
//import { render } from '@testing-library/react';
//import App from './App';
import { shallow, mount} from 'enzyme';

import{ ActividadesPage } from './pages/actividades'



// test('renders learn react link', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });



it('Levantar  actividades sin errores ', () => {
  shallow(<ActividadesPage/>);
   
});
