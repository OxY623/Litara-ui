import { useQuery } from '@apollo/client/react';
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import { Heart } from 'lucide-react';
import { useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router';
import { IS_LOGGED_IN } from '../apollo.js';
import { ButtonShowDonationContext } from '../App';
import logo from '../assets/logo.png';

function Header() {
  const [_, handleClickShowDonation] = useContext(ButtonShowDonationContext);
  const { data, client } = useQuery(IS_LOGGED_IN);
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={4}
      sx={{
        height: 64,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        {/* Логотип и название */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            component="img"
            src={logo}
            alt='Logo "OranNote"'
            sx={{ width: 48, height: 48, borderRadius: '50%' }}
          />
          <Typography variant="h6" fontWeight="bold" sx={{ m: 0, p: 0 }}>
            <Box component="span" sx={{ color: 'orange' }}>
              Oran
            </Box>
            Note
          </Typography>
        </Box>

        <Box display={'flex'} alignItems="center" gap={2}>
          {/* Авторизация */}
          {data?.isLoggedIn ? (
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
              }}
            >
              Log out!!
            </Button>
          ) : (
            <Typography variant="body2" sx={{ m: 0, p: 0 }}>
              <Link component={RouterLink} to="/signin" underline="hover">
                Sign In
              </Link>{' '}
              OR{' '}
              <Link component={RouterLink} to="/signup" underline="hover">
                Sign Up
              </Link>
            </Typography>
          )}

          {/* Кнопка поддержки */}
          <Button
            variant="contained"
            color="inherit"
            sx={{ bgcolor: 'orange' }}
            onClick={() => handleClickShowDonation(true)}
          >
            <Heart size={18} />
            <Typography
              variant="body2"
              sx={{ ml: 1, display: { xs: 'none', sm: 'inline' } }}
            >
              Support
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export { Header };
