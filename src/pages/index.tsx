import { m, useScroll, useSpring } from 'framer-motion';
// next
import Head from 'next/head';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeForDesigner,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
  TravelLandingHero,
} from '../sections/home';
import { _tours } from 'src/_mock/arrays';

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  const theme = useTheme();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progress = (
    <m.div
      style={{
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1999,
        position: 'fixed',
        transformOrigin: '0%',
        backgroundColor: theme.palette.primary.main,
        scaleX,
      }}
    />
  );

  return (
    <>
      <Head>
        <title> Travel made easy with AI. | AiTour</title>
      </Head>

      {progress}

      <TravelLandingHero tours={_tours.slice(0, 5)} />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeMinimal />
        <HomeAdvertisement/>
        <HomeLookingFor />
      </Box>
    </>
  );
}
