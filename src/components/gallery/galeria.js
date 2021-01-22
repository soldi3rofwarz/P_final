import React, { useState } from 'react';
import Title from './titulo';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './modal';
import './galeria.css';
import Lugares from './lugares'

const Galeria =()=>{
    const [selectedImg, setSelectedImg] = useState(null);
    return(
      <>
        <div className="App">
          
          <Title/> 
          <Lugares/>
          
          <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
        </div>
        <div style={{marginLeft: '85%', border:'1px solid black'}}>
            <h6>Publicidad</h6>
            <img src={`${process.env.PUBLIC_URL}/res/pub1.jpg`} width='200px'/>
            <img src={`${process.env.PUBLIC_URL}/res/pub2.jpg`} width='200px'/>
          </div>
    </>
    )
}
export default Galeria;