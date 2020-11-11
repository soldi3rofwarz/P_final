import React from 'react';
//import { render } from '@testing-library/react';
//import App from './App';
import { shallow, mount} from 'enzyme';

import Form from './components/Actividades/form-actividades'



// test('renders learn react link', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });



it('renders without crashing', (props) => {
  const componentProps = {match: {params: {actividadId: 123}}};
  shallow(<Form 
    {...componentProps}
  />);
});
