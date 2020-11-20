import React from 'react';
//import { render } from '@testing-library/react';
//import App from './App';
import { shallow, mount} from 'enzyme';

import{ ActividadesPage } from './pages/actividades'
import Det_page from './pages/detallePage'



// test('renders learn react link', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

const value=0
const setValue= value

const Limite=()=>{
  setValue(value + 1)

  if(value === 20){
      setValue(value===0)
      
  }
}

describe('Actividades',()=>{
  it('Levantar  actividades sin errores', () => {
     shallow(<ActividadesPage/>);
     
  });
})

describe('Detalles',()=>{
  it('provar existencia de mapa', () => {
    const wrapper= shallow(<Det_page/>);
    const mapa = wrapper.find('mapa')
    expect(mapa) 
  });
})

describe('prueba limites',()=>{
  it('probar limite de participantes', ()=>{
    const wrapper= shallow(<Det_page onClick={Limite}/>);

  })
})
