// next
import Head from 'next/head';
// @mui
import { Container, Typography } from '@mui/material';
// layouts
// components
import Block from 'src/components/settings/drawer/Block';
import { TravelTourDetailsGallery } from 'src/sections/_travel/tour/details';
import { TravelTourView, TravelToursView } from 'src/sections/_travel/view';
import DashboardLayout from 'src/layouts/dashboard/DashboardLayout';
import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------

BlankPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------
export default function BlankPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> Blank Page | AiTour</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <TravelTourView />
      </Container>
    </>
  );
}
