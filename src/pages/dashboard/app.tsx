// next
import Head from 'next/head';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button } from '@mui/material';
import {
  DatePicker,
  StaticDatePicker,
  MobileDatePicker,
  DesktopDatePicker,
} from '@mui/x-date-pickers';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// _mock_
import {
  _appFeatured,
  _appAuthors,
  _appInstalled,
  _appRelated,
  _appInvoices,
  _tours,
} from '../../_mock/arrays';

// components
import { useSettingsContext } from '../../components/settings';

// assets
import { SeoIllustration } from '../../assets/illustrations';
import { TravelTourList } from 'src/sections/_travel/tour/list';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ----------------------------------------------------------------------

GeneralAppPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function GeneralAppPage() {
  useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();
  interface Tags {
    [key: string]: boolean;
  }

  const [tags, setTags] = useState<Tags>({
    Historical: false,
    'Natural WoSitesnders': false,
    Hiking: false,
    Camping: false,
    Sports: false,
    'Water Activities': false,
    Romantic: false,
    Nightlife: false,
    Festivals: false,
    Shopping: false,
    'Cultural Heritage': false,
    'Family Fun': false,
    'Art and Museums': false,
    'Religious Sites': false,
    'Wildlife Sanctuaries': false,
    'Beaches and Coastal Areas': false,
    'Food and Culinary Tours': false,
    Entertainment: false,
    'Spas and Wellness': false,
    'Urban Exploration': false,
  });

  const [interests, setInterests] = useState<Tags>({
    Photography: false,
    'local cuisines': false,
    'cultural workshops': false,
    'local festivals': false,
    'local sports': false,
    'local music': false,
    'local art': false,
    'local fashion': false,
    'local dance': false,
  });

  const [location, setLocation] = useState<Tags>({
    'Addis Ababa': false,
    Afar: false,
    Amhara: false,
    'Benishangul-Gumuz': false,
    'Dire Dawa': false,
    Gambela: false,
    Oromia: false,
  });

  const [additionalInfo, setAdditionalInfo] = useState<String>('');

  const [budget, setBudget] = useState<Tags>({
    'Budget-friendly': false,
    'Mid-range': false,
    Luxury: false,
  });

  const tagKeys = Object.keys(tags);
  const interestKeys = Object.keys(interests);
  const locationKeys = Object.keys(location);
  const budgetKeys = Object.keys(budget);

  const handleClick = (tag: string) => {
    setTags((prevTags) => {
      return {
        ...prevTags,
        [tag]: !prevTags[tag],
      };
    });
  };

  const handleInterstClick = (tag: string) => {
    setInterests((prevTags) => {
      return {
        ...prevTags,
        [tag]: !prevTags[tag],
      };
    });
  };
  const handleLocationClick = (tag: string) => {
    setLocation((prevTags) => {
      return {
        ...prevTags,
        [tag]: !prevTags[tag],
      };
    });
  };
  const handleAccomedatinClick = (tag: string) => {
    setBudget((prevTags) => {
      return {
        ...prevTags,
        [tag]: !prevTags[tag],
      };
    });
  };

  return (
    <>
      <Head>
        <title> Home | AiTour</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <TravelTourList tours={_tours} loading={false} />
          </Grid>
          <Grid item xs={12} md={4} spacing={3}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Interests</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {tagKeys.map((tag: string) => {
                  const isTagSelected = tags[tag];
                  const variant = isTagSelected ? 'filled' : 'outlined';

                  return (
                    <Chip
                      label={`${tag}`}
                      variant={variant}
                      sx={{ marginRight: '6px', marginBottom: '12px' }}
                      onClick={() => handleClick(tag)}
                    />
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Specific Interests</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {interestKeys.map((tag: string) => {
                  const isTagSelected = interests[tag];
                  const variant = isTagSelected ? 'filled' : 'outlined';
                  return (
                    <Chip
                      label={`${tag}`}
                      variant={variant}
                      sx={{ marginRight: '6px', marginBottom: '12px' }}
                      onClick={() => handleInterstClick(tag)}
                    />
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>preferred Location</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {locationKeys.map((tag: string) => {
                  const isTagSelected = location[tag];
                  const variant = isTagSelected ? 'filled' : 'outlined';
                  return (
                    <Chip
                      label={`${tag}`}
                      variant={variant}
                      sx={{ marginRight: '6px', marginBottom: '12px' }}
                      onClick={() => handleLocationClick(tag)}
                    />
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accomodation preference</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {budgetKeys.map((tag: string) => {
                  const isTagSelected = budget[tag];
                  const variant = isTagSelected ? 'filled' : 'outlined';
                  return (
                    <Chip
                      label={`${tag}`}
                      variant={variant}
                      sx={{ marginRight: '6px', marginBottom: '12px' }}
                      onClick={() => handleAccomedatinClick(tag)}
                    />
                  );
                })}
              </AccordionDetails>
            </Accordion>

            <Typography variant="overline">Anything else?</Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="write your prompt"
                variant="outlined"
                multiline
                rows={3}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: 3,
                flexWrap: 'wrap',
                margin: '20',
                '& > :not(style)': { m: 1, width: '40ch' },
              }}
            >
              <Button variant="soft" color="success" endIcon={<KeyboardArrowRight />}>
                Generate preferences
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
