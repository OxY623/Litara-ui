import {
  Box,
  Button,
  Card,
  CardContent,
  Snackbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function DonationTon() {
  const wallet = 'UQBKH60IlUIGBd6Fd4-JYQ5YmYh9pYXJ90kz6HC3uNMoSb6F';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(wallet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        border: '1px solid',
        borderColor: 'grey.300',
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Support via TON
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Send your donation to:
        </Typography>

        <Box
          sx={{
            mt: 2,
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            wordBreak: 'break-all',
            bgcolor: 'grey.100',
            p: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'grey.300',
          }}
        >
          {wallet}
        </Box>

        <Button
          fullWidth
          variant="contained"
          color="success"
          sx={{ mt: 3 }}
          onClick={copyToClipboard}
        >
          {copied ? 'Copied ✓' : 'Copy Address'}
        </Button>

        <Snackbar
          open={copied}
          autoHideDuration={1500}
          message="Wallet address copied!"
        />
      </CardContent>
    </Card>
  );
}
