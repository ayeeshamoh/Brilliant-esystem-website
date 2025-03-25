import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs and challenges.',
    icon: <CodeIcon sx={{ fontSize: 60, color: '#1B5E20' }} />,
    image: '/images/custom-dev.jpg'
  },
  {
    title: 'Database Management',
    description: 'Efficient and secure database solutions to handle your data with precision and care.',
    icon: <StorageIcon sx={{ fontSize: 60, color: '#1B5E20' }} />,
    image: '/images/database.jpg'
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and sensitive information.',
    icon: <SecurityIcon sx={{ fontSize: 60, color: '#1B5E20' }} />,
    image: '/images/security.jpg'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to modernize your business operations.',
    icon: <CloudIcon sx={{ fontSize: 60, color: '#1B5E20' }} />,
    image: '/images/cloud.jpg'
  },
  {
    title: 'IT Support',
    description: '24/7 technical support and maintenance to keep your systems running smoothly.',
    icon: <SupportAgentIcon sx={{ fontSize: 60, color: '#1B5E20' }} />,
    image: '/images/support.jpg'
  }
];

const Services = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#F5F5F5' }}>
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
            Our Services
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 6, color: 'text.secondary' }}
          >
            Comprehensive IT solutions for your business needs
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image}
                      alt={service.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                      <Box sx={{ mb: 2 }}>{service.icon}</Box>
                      <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 700,
                          color: '#1B5E20'
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        paragraph
                        sx={{ color: 'text.secondary', mb: 3 }}
                      >
                        {service.description}
                      </Typography>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                          bgcolor: '#1B5E20',
                          color: 'white',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            bgcolor: '#0D47A1',
                            transform: 'translateY(-3px)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                          },
                          '&:active': {
                            transform: 'translateY(1px)',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services; 