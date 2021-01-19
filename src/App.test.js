import React from 'react';
//import { render } from '@testing-library/react';

import { shallow, mount} from 'enzyme';
import {db} from './api/data/firebase-config'
import{ ActividadesPage } from './pages/actividades'
import Detalles from './elements/Detalles/componentes/detalles'
import LoginPage from './pages/login'
import Lugar1 from './components/informacion/informacion-compo/lugar1'
import Galeria from './components/gallery/galeria'
import Header from './elements/theme/components/header'
import AgregarActividades from './components/Actividades/form-actividades'
import {GetData, actividadesQuery} from './api/data/actividades'
import Login from './components/login/Cliente/componente/login-cliente'

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
}*/

 /* describe('Detalles',()=>{
   /* it('001. probar limite de participantes', ()=>{
    const wrapper= shallow(<Det_page onClick={Limite}/>);

  })  
  it('  . Inscripcion de participantes',()=>{
    const click = jest.fn()
    const wrapper= shallow(<Detalles />);
    
    expect(wrapper.find('#p').text().includes('')).toBe(true)
    wrapper.find('#dd')
  })
})  */

/* 
describe('Detalles',()=>{
  it('002. probar existencia de mapa', () => {
    const wrapper= shallow(<Detalles/>);
    const mapa = wrapper.find('mapa')
    expect(mapa) 
  });
}) */



 /*describe('Actividades',()=>{
  it('003. Levantar  actividades sin errores', () => {
     shallow(<ActividadesPage/>);
     
  });
  it('003. Levantar  actividades sin errores', () => {
  const  wrapper = mount(GetData);
  const miMock = jest.fn();
  miMock.mockReturnValueOnce(actividades)
  
 });
})  */




 describe('Login',()=>{
  /* it('004. Levantar  login sin errores', () => {
     shallow(<LoginPage/>);
     
  }); */
/* 
  test('005. probar existencia de usuario', ()=>{
    const wrapper = shallow(<Login/>)
    wrapper.find('input[type="text"]')
    .simulate('change', {target:{name:'email', value:'hola@gmail.com'}})
    expect(wrapper.state('email')).toEqual('hola@gmail.com')
  }) */
  it('005.1. probar contraseña', ()=>{
    const wrapper = shallow(<Login/>)
   
  })
}) 

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
