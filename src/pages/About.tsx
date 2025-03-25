import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 800,
              mb: 3,
              color: '#1B5E20'
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 6, color: 'text.secondary' }}
          >
            Your trusted partner in innovative software solutions
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    bgcolor: '#1B5E20',
                    color: 'white'
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 3, color: 'white' }}>
                    Our Story
                  </Typography>
                  <Typography paragraph sx={{ color: 'white' }}>
                    Founded in Kano, Nigeria, Brilliant eSystems has been at the forefront of technological innovation. We believe in creating solutions that not only meet current needs but also anticipate future challenges.
                  </Typography>
                  <Typography paragraph sx={{ color: 'white' }}>
                    Our journey began with a simple mission: to provide cutting-edge software solutions that empower businesses to thrive in the digital age. Today, we continue to uphold this mission while expanding our reach and capabilities.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    bgcolor: '#1B5E20',
                    color: 'white'
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 3, color: 'white' }}>
                    Our Mission
                  </Typography>
                  <Typography paragraph sx={{ color: 'white' }}>
                    At Brilliant eSystems, we are committed to delivering excellence in every project we undertake. Our mission is to provide innovative, reliable, and scalable software solutions that help businesses grow and succeed.
                  </Typography>
                  <Typography paragraph sx={{ color: 'white' }}>
                    We believe in building long-term relationships with our clients, understanding their unique needs, and providing tailored solutions that drive their success.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 