import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';

const Careers = () => {
  const benefits = [
    'Competitive salary and benefits package',
    'Professional development opportunities',
    'Flexible working hours',
    'Health insurance coverage',
    'Annual leave and paid time off',
    'Team building activities',
    'Modern office environment',
    'Career growth opportunities'
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality solutions to our clients.',
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: 'white' }} />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication to achieve great results.',
      icon: <GroupIcon sx={{ fontSize: 40, color: 'white' }} />
    },
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies to stay ahead of the curve.',
      icon: <LightbulbIcon sx={{ fontSize: 40, color: 'white' }} />
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of professional ethics and transparency in all our dealings.',
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'white' }} />
    },
    {
      title: 'Growth',
      description: 'We are committed to continuous learning and development, both as individuals and as a team.',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'white' }} />
    }
  ];

  const openPositions = [
    {
      title: 'Senior Software Developer',
      location: 'Kano, Nigeria',
      type: 'Full-time',
      department: 'Engineering',
      description: 'We are looking for an experienced software developer to join our team and help build innovative solutions.'
    },
    {
      title: 'UI/UX Designer',
      location: 'Kano, Nigeria',
      type: 'Full-time',
      department: 'Design',
      description: 'Join our design team to create beautiful and intuitive user interfaces for our products.'
    },
    {
      title: 'Project Manager',
      location: 'Kano, Nigeria',
      type: 'Full-time',
      department: 'Management',
      description: 'Lead and manage software development projects from conception to delivery.'
    }
  ];

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
            Join Our Team
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 6, color: 'text.secondary' }}
          >
            Build your career with us
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
                  <Typography variant="h4" sx={{ mb: 4, color: 'white' }}>
                    Why Join Us
                  </Typography>
                  <List>
                    {benefits.map((benefit, index) => (
                      <ListItem key={index} sx={{ color: 'white' }}>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
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
                  <Typography variant="h4" sx={{ mb: 4, color: 'white' }}>
                    Our Values
                  </Typography>
                  <Grid container spacing={3}>
                    {values.map((value, index) => (
                      <Grid item xs={12} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                          <Box sx={{ mr: 2 }}>{value.icon}</Box>
                          <Box>
                            <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                              {value.title}
                            </Typography>
                            <Typography sx={{ color: 'white' }}>
                              {value.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          {/* Open Positions Section */}
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                mb: 4,
                color: '#1B5E20'
              }}
            >
              Open Positions
            </Typography>
            <Grid container spacing={3}>
              {openPositions.map((position, index) => (
                <Grid item xs={12} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 16px rgba(27, 94, 32, 0.2)',
                          bgcolor: 'rgba(27, 94, 32, 0.02)'
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h5" sx={{ color: '#1B5E20', mb: 1 }}>
                            {position.title}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                              <LocationOnIcon sx={{ mr: 1, fontSize: 20, color: '#1B5E20' }} />
                              {position.location}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                              <WorkIcon sx={{ mr: 1, fontSize: 20, color: '#1B5E20' }} />
                              {position.type}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                              <BusinessIcon sx={{ mr: 1, fontSize: 20, color: '#1B5E20' }} />
                              {position.department}
                            </Box>
                          </Box>
                          <Typography paragraph sx={{ color: 'text.secondary', mb: 0 }}>
                            {position.description}
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: '#1B5E20',
                            color: 'white',
                            ml: 2,
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
                          Apply Now
                        </Button>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Careers; 