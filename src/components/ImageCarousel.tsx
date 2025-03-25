import { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const images = [
  {
    url: 'images/software-team.jpg',
    title: 'Your trusted partner in innovative software solutions',
    description: 'Based in Kano, Nigeria, we deliver excellence in every project.',
    fallbackColor: '#1B5E20',
  },
  {
    url: 'images/coding-future.jpg',
    title: 'Shaping the Digital Future',
    description: 'Innovative solutions for tomorrow\'s challenges',
    fallbackColor: '#2E7D32',
  },
  {
    url: 'images/software-dev.jpg',
    title: 'Quality Service',
    description: 'Committed to excellence in every project',
    fallbackColor: '#388E3C',
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Log when component mounts
    console.log('ImageCarousel mounted');
    console.log('Current image URL:', images[currentIndex].url);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Image failed to load:', e.currentTarget.src);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', images[currentIndex].url);
    setImageLoaded(true);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden' }}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: images[currentIndex].fallbackColor,
          }}
        >
          {!imageError && (
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              onError={handleImageError}
              onLoad={handleImageLoad}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: imageLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
              }}
            />
          )}
          
          {/* Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
              zIndex: 1,
            }}
          />

          {/* Content */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            sx={{
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              color: 'white',
              padding: '2rem',
              maxWidth: '800px',
              margin: '0 auto',
              background: 'rgba(27, 94, 32, 0.85)',
              borderRadius: '12px',
              backdropFilter: 'blur(4px)',
            }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                fontSize: '2.8rem',
                marginBottom: '1rem',
                fontFamily: '"Playfair Display", serif',
                fontWeight: 800,
              }}
            >
              {images[currentIndex].title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              style={{
                fontSize: '1.2rem',
                fontFamily: '"Montserrat", sans-serif',
              }}
            >
              {images[currentIndex].description}
            </motion.p>
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <IconButton
        onClick={handlePrevious}
        sx={{
          position: 'absolute',
          left: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.5)',
          color: 'white',
          zIndex: 3,
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.5)',
          color: 'white',
          zIndex: 3,
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
        }}
      >
        <ChevronRightIcon />
      </IconButton>

      {/* Dots */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 2,
          zIndex: 3,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: '0.3s',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageCarousel; 