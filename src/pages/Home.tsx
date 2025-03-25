import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <Box>
      {/* Hero Section with Carousel */}
      <ImageCarousel />

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 800,
            color: '#1B5E20',
            mb: 6,
          }}
        >
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#1B5E20',
                color: 'white',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <CodeIcon sx={{ fontSize: 60, mb: 2, color: 'white' }} />
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    color: 'white',
                  }}
                >
                  Innovative Solutions
                </Typography>
                <Typography sx={{ color: 'white', fontSize: '1.1rem' }}>
                  We leverage cutting-edge technology to deliver innovative solutions that drive business growth.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#1B5E20',
                color: 'white',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <GroupIcon sx={{ fontSize: 60, mb: 2, color: 'white' }} />
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    color: 'white',
                  }}
                >
                  Expert Team
                </Typography>
                <Typography sx={{ color: 'white', fontSize: '1.1rem' }}>
                  Our experienced professionals bring expertise and dedication to every project.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#1B5E20',
                color: 'white',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <CheckCircleIcon sx={{ fontSize: 60, mb: 2, color: 'white' }} />
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    color: 'white',
                  }}
                >
                  Quality Service
                </Typography>
                <Typography sx={{ color: 'white', fontSize: '1.1rem' }}>
                  We are committed to delivering high-quality solutions that exceed client expectations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleGetStarted}
            sx={{
              backgroundColor: '#1B5E20',
              color: 'white',
              '&:hover': {
                backgroundColor: '#0A280E',
              },
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 600,
              px: 4,
              py: 1.5,
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 