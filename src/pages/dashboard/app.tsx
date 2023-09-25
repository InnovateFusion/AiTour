// next
import Head from 'next/head';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// _mock_
import {
  _tours,
} from '../../_mock/arrays';

// components
import { useSettingsContext } from '../../components/settings';

// assets
import { SeoIllustration } from '../../assets/illustrations';
import { TravelTourList } from 'src/sections/_travel/tour/list';

// ----------------------------------------------------------------------

GeneralAppPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function GeneralAppPage() {
  useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> Home | AiTour</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <TravelTourList tours={_tours} loading={false} />
          </Grid>

          <Grid item xs={12} md={3}>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
