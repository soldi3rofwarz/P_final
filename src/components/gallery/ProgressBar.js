import React, { useEffect } from 'react';
import useStorage from './useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile, setUrl }) => {
  console.log("ProgressBar: ", file);
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      if(setUrl) setUrl(url);
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;