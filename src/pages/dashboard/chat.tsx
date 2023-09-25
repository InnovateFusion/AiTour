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
import { _tours } from '../../_mock/arrays';

// components
import { useSettingsContext } from '../../components/settings';
// sections

// assets
import { TravelTourList } from 'src/sections/_travel/tour/list';
import { Chat } from 'src/sections/@dashboard/chat';
import Block from 'src/components/settings/drawer/Block';

// ----------------------------------------------------------------------

ChatPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function ChatPage() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> Chat | AiTour</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Block title={"hi"}>
                <Chat />
            </Block>
          </Grid>

          {/* <Grid item xs={12} md={3}>
            <Block>h</Block>
          </Grid> */}
          <Grid item xs={12} md={6}>
            <TravelTourList tours={_tours} loading={false} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
