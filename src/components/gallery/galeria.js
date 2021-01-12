import React, { useState } from 'react';
import Title from './titulo';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './modal';
import './galeria.css';
import Header from './../header/Head'
import Lugares from './lugares'

const Galeria =()=>{
    const [selectedImg, setSelectedImg] = useState(null);
    return(
      <>
      <Header/>
        <div className="App">
          
          <Title/> 
          <Lugares/>
          <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
        </div>
    </>
    )
}
export default Galeria;