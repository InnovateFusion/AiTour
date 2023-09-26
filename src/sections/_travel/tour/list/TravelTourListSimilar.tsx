// next
import NextLink from 'next/link';
// @mui
import { Container, Stack, Button, Typography, Box, Tab } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// types
import { ITourProps } from 'src/types/tour';
// components
import Iconify from 'src/components/iconify';
//
import { TravelTourItem, TravelHotelItem } from '../item';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';

// ----------------------------------------------------------------------

type Props = {
  tours: ITourProps[];
};

export default function TravelTourListSimilar({ tours }: Props) {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const isMdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    <Button
      component={NextLink}
      href={'/paths.travel.tours'}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Box sx={{ bgcolor: 'background.neutral' }}>
      <Container
        sx={{
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">Service Providers</Typography>

          {isMdUp && viewAllBtn}
        </Stack>

        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Hotels" value="1" />
              <Tab label="Tour Guides" value="2" />
              <Tab label="Car Rentals" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box
              sx={{
                display: 'grid',
                gap: { xs: 4, md: 3 },
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
              }}
            >
              {tours.map((tour, index) => (
                <TravelHotelItem key={tour.id} tour={tour} />
              ))}
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box
              sx={{
                display: 'grid',
                gap: { xs: 4, md: 3 },
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
              }}
            >
              {tours.map((tour, index) => (
                <TravelTourItem key={tour.id} tour={tour} />
              ))}
            </Box>
          </TabPanel>
          <TabPanel value="3">
            <Box
              sx={{
                display: 'grid',
                gap: { xs: 4, md: 3 },
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
              }}
            >
              {tours.map((tour, index) => (
                <TravelTourItem key={tour.id} tour={tour} />
              ))}
            </Box>
          </TabPanel>
        </TabContext>

        {!isMdUp && (
          <Stack alignItems="center" sx={{ mt: 8 }}>
            viewAllBtn
          </Stack>
        )}
      </Container>
    </Box>
  );
}
