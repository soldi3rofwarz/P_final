import React, { useState } from 'react';
import Title from './titulo';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './modal';


const Galeria =()=>{
    const [selectedImg, setSelectedImg] = useState(null);
    return(
        <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
    )
}

export default Galeria;