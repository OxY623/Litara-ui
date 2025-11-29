import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Drawer,
  IconButton,
  Typography,
} from '@mui/material';
import { ArrowRight, Heart } from 'lucide-react';
import { useContext, useState } from 'react';
import { Outlet } from 'react-router';
import { ButtonShowDonationContext } from '../App';
import DonationTon from './DonationTon';
import { Header } from './Header';
import { Navigation } from './Navigation';

function Layout() {
  const [expand, setExpand] = useState(false);
  const [showDonation, handleClickShowDonation] = useContext(
    ButtonShowDonationContext,
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        maxWidth: '1400px',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'grey.50',
        px: 2,
      }}
    >
      <Header />

      <Box sx={{ display: 'flex', pt: 8, overflow: 'hidden' }}>
        {/* Sidebar for desktop */}
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: 'none', lg: 'flex' },
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              position: 'relative',
              width: expand ? 286 : 100,
              transition: 'width 0.3s',
              borderRight: '1px solid',
              borderColor: 'grey.200',
              bgcolor: 'background.paper',
              p: 2,
            },
          }}
        >
          <Navigation statusSidebar={expand} />
          <IconButton
            onClick={() => setExpand((prev) => !prev)}
            sx={{ mt: 2 }}
            variant="outlined"
            className="text-amber-600"
          >
            <ArrowRight
              className={expand ? 'rotate-180' : 'rotate-0'}
              style={{ transition: 'transform 0.3s', color: 'orange' }}
            />
          </IconButton>
        </Drawer>

        {/* Mobile nav */}
        <Box
          sx={{
            display: { xs: 'block', lg: 'none' },
            width: { xs: '25%', sm: '33%' },
            borderBottom: '1px solid',
            borderColor: 'grey.200',
            bgcolor: 'background.paper',
            p: 2,
            flexShrink: 0,
          }}
        >
          <Navigation />
        </Box>

        {/* Main */}
        <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 2, lg: 4 } }}>
          <Outlet />

          {/* Donation modal */}
          <Dialog
            open={showDonation}
            onClose={() => handleClickShowDonation(false)}
            fullWidth
            maxWidth="sm"
          >
            <DialogContent sx={{ textAlign: 'center', p: 4 }}>
              <Heart
                size={64}
                style={{ color: 'red', margin: '0 auto 16px' }}
              />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Support the Project
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                OranNote is a modern, minimalist platform designed to help
                people think clearer, capture ideas faster, and stay organized
                in a digital-first world. Your support helps us improve the
                experience, ship new features, and keep the platform accessible
                for everyone.
              </Typography>

              <Box
                sx={{
                  background:
                    'linear-gradient(to right, #ef4444, #fff, #22c55e)',
                  p: 1,
                  borderRadius: 2,
                  mb: 3,
                }}
              >
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignContent={'center'}
                  sx={{
                    bgcolor: 'white',
                    borderRadius: 2,
                    p: 3,
                    flexDirection: 'column',
                  }}
                >
                  <Typography fontWeight="bold" gutterBottom>
                    Donation details:
                  </Typography>
                  <DonationTon />
                </Box>
              </Box>

              <Button
                fullWidth
                variant="contained"
                color="error"
                onClick={() => handleClickShowDonation(false)}
              >
                Ok
              </Button>
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
