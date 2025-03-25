import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: '#F5F5F5' }}>
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
            About Brilliant eSystems
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 6, color: 'text.secondary' }}
          >
            Leading Software Development in Kano
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
                    Brilliant eSystems is a premier software development company based in Kano, Nigeria. 
                    We specialize in creating innovative digital solutions that help businesses thrive 
                    in the modern digital landscape.
                  </Typography>
                  <Typography paragraph sx={{ color: 'white' }}>
                    Our team of expert developers, designers, and consultants work together to deliver 
                    cutting-edge solutions that meet your specific needs and exceed your expectations.
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
                    Our Vision
                  </Typography>
                  <Typography paragraph sx={{ color: 'white' }}>
                    At Brilliant eSystems, we are committed to delivering excellence in every project we undertake. 
                    Our vision is to be the leading tech innovator in Northern Nigeria, providing innovative, reliable, 
                    and scalable software solutions that help businesses grow and succeed.
                  </Typography>
                  <Typography paragraph sx={{ color: 'white' }}>
                    We believe in building long-term relationships with our clients, understanding their unique needs, 
                    and providing tailored solutions that drive their success.
                  </Typography>
                  <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        bgcolor: 'white',
                        color: '#1B5E20',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.9)',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
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