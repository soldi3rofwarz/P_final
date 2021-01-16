import React from 'react';
//import { render } from '@testing-library/react';
//import App from './App';
import { shallow, mount} from 'enzyme';

import{ ActividadesPage } from './pages/actividades'
import Det_page from './pages/detallePage'
import LoginPage from './pages/login'
import Lugar1 from './components/informacion/informacion-compo/lugar1'
import Galeria from './components/gallery/galeria'
import Header from './elements/theme/components/header'


//test('renders learn react link', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

/*const value=0
const setValue= value

const Limite=()=>{
 setValue(value + 1)

 if(value === 20){
      setValue(value===0)
      
 }
}

describe('prueba limites',()=>{
  it('001. probar limite de participantes', ()=>{
    const wrapper= shallow(<Det_page onClick={Limite}/>);

  })
})*/

/*describe('Detalles',()=>{
  it('002. provar existencia de mapa', () => {
    const wrapper= shallow(<Det_page/>);
    const mapa = wrapper.find('mapa')
    expect(mapa) 
  });
})*/

/*describe('Actividades',()=>{
  it('003. Levantar  actividades sin errores', () => {
     shallow(<ActividadesPage/>);
     
  });
})*/

/*describe('Actividades',()=>{
  it('004. Levantar  login sin errores', () => {
     shallow(<LoginPage/>);
     
  });
})*/

/*describe('campo contraseña ',()=>{
  it('005. verificar si la contraseña esta oculta', () => {
    const wrapper= shallow(<LoginPage/>);
    const pass = wrapper.find("password")
    expect(pass.type== "password")
     
  });
})*/


/*describe('Informacion de galeria',()=>{
  it('006. verificar si el titulo  de la vista es igual al titulo solicitado', () => {
    const wrapper= shallow(<Lugar1/>);
    const h2 = wrapper.find('h2')
    expect(h2.text()).toEqual("El Nancital")
     
  });
})*/

/*describe('Galeria de imagenes ',()=>{
  it('007. Levantar vista sin errores', () => {
     shallow(<Galeria/>);
  });
})*/

/*describe('Navbar',()=>{
  it('008. probar si existe enrutamiento con el componente Link', () => {
     const Wrapper = shallow(<Header/>);

  });
})*/
