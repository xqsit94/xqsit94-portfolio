import React from 'react';
import { motion } from 'framer-motion';

export const Slider = ({ className }: { className: string }) => {
  const imageCount = 6;
  const [imageId, setFace] = React.useState(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFace((imageId) => (imageId % imageCount) + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      <motion.img
        className="h-full mx-auto"
        src={`/svg/${imageId}.svg`}
        alt="face"
        key={imageId}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
    </div>
  );
};
