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

/*   describe('Detalles',()=>{
    it('001. probar limite de participantes', ()=>{
    const wrapper= shallow(<Det_page onClick={Limite}/>);

  })
  it('  . Inscripcion de participantes',()=>{
    const click = jest.fn()
    const wrapper= shallow(<Detalles />);
    
    expect(wrapper.find('#p').text().includes('')).toBe(true)
    wrapper.find('#dd').simulate(click)
  })
}) */
 

/* 
describe('Detalles',()=>{
  it('002. probar existencia de mapa', () => {
    const wrapper= shallow(<Detalles/>);
    const mapa = wrapper.find('mapa')
    expect(mapa) 
  });
}) */



/*  describe('Actividades',()=>{
  it('004. Cargar actividades sin errores', () => {
     shallow(<ActividadesPage/>);
     
  });
})   */




  /* describe('Login',()=>{
 
 
   test('005. probar existencia de usuario', ()=>{
    const wrapper = shallow(<Login/>)
    wrapper.find('input[type="text"]')
    .simulate('change', {target:{name:'email', value:'hola@gmail.com'}})
    expect(wrapper.state('email')).toEqual('hola@gmail.com')
  }) 
  it('005. probar contraseña', ()=>{
    const wrapper = shallow(<Login/>)
   .simulate('change', {target:{name:'password', value:'123456'}})
    expect(wrapper.state('password')).toEqual('123456')
  }) 

  it('006. Levantar  login sin errores', () => {
    shallow(<LoginPage/>);
    
 });  
})   */

 describe('campo contraseña ',()=>{
  it('007. Validar campo contraseña ingresada se convierta a asterisco', () => {
    const wrapper= shallow(<LoginPage/>);
    const pass = wrapper.find("password")
    expect(pass.type== "password")
     
  });
}) 


/* describe('Informacion de galeria',()=>{
  it('009. Comprobar vistas de informcion de lugares turisticos', () => {
    const wrapper= shallow(<Lugar1/>);
    const h2 = wrapper.find('h2')
    expect(h2.text()).toEqual("El Nancital")
     
  });
}) */

 /* describe('Galeria de imagenes',()=>{
  it('010. Comprobar carga de de imagenes en la vista de galeria', () => {
     shallow(<Galeria/>);
  });
})  */

/* describe('Navbar',()=>{
  it('011. probar si existe enrutamiento con el componente Link', () => {
     const Wrapper = shallow(<Header/>);
     const Link =Wrapper.find('Link')
     expect(Link).toBeTruthy()
  });
}) */



/* describe ("formulario", ()=>{
  it("003. Agregar una actividad", ()=>{
    const wrapper = shallow(<AgregarActividades/>)
    wrapper.find('input[type="text"]')
    .simulate('change', {target:{name:'actividad', value:'Actividad de prueba'}})
    expect(wrapper.state('actividad')).toEqual('Actividad de prueba')
  })

  it("003. Agregar una fecha", ()=>{
    const wrapper = shallow(<AgregarActividades/>)
    wrapper.find('input[type="date"]')
    .simulate('change', {target:{name:'fecha', value:'09/02/2021'}})
    expect(wrapper.state('fecha')).toEqual('09/02/2021')
  })

  it("003. Agregar un precio", ()=>{
    const wrapper = shallow(<AgregarActividades/>)
    wrapper.find('input[type="number"]')
    .simulate('change', {target:{name:'precio', value:45}})
    expect(wrapper.state('precio')).toEqual(45)
  })
}) */

