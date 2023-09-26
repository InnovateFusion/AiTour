import { useState, useEffect } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import {
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// routes
// _mock
import { _socials, _tours } from 'src/_mock/arrays';
// components
import Iconify from 'src/components/iconify';
import LoadingScreen from 'src/components/loading-screen';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import {
  TravelTourDetailsHeader,
  TravelTourDetailsGallery,
  TravelTourDetailsSummary,
} from '../tour/details';
import { TravelTourListSimilar } from '../tour/list';

// ----------------------------------------------------------------------

import _mock from '../../../_mock';
import { add } from 'date-fns';
import { ITourProps } from 'src/types/tour';

const test = {
  id: '1',
  name: 'Bale Mountains National Park',
  description: [
    'Bale Mountains National Park is a natural wonder in the Oromia region, known for its stunning landscapes and diverse wildlife.',
  ],
  location: {
    latitude: '6.8754',
    longitude: '39.0348',
    address: 'Bale Mountains National Park, Oromia, Ethiopia',
  },
  category: ['Natural Wonders', 'Hiking', 'Wildlife Sanctuaries', 'Adventure and Outdoor'],
  highlights: [
    'Scenic beauty of high plateaus and rugged peaks',
    'Chance to spot Ethiopian wolves and mountain nyala',
  ],
  images: [
    {
      url: '/assets/images/travel/travel_post_01.jpg',
      caption: 'Bale Mountains National Park - Scenic View',
    },
    {
      url: '/assets/images/travel/travel_post_02.jpg',
      caption: 'Ethiopian Wolf in the Park',
    },
  ],
  activities: [
    {
      label: 'Audio guide',
      enabled: true,
      name: 'Hiking and Trekking',
      description: "Explore the park's hiking trails and trekking routes.",
    },
    {
      label: 'Audio guide',
      enabled: false,
      name: 'Wildlife Watching',
      description: 'Observe unique wildlife species in their natural habitat.',
    },
  ],
  Weather: {
    description: 'Varies from cool to cold, with a rainy season from June to September.',
    averageTemp: 14.0,
  },
  tour_services: {
    accommodations: [
      {
        name: 'Simien Lodge',
        type: ['Lodge'],
        description: 'A lodge offering comfortable stays and access to the national park.',
        location: {
          latitude: '6.8776',
          longitude: '39.0382',
          address: 'Simien Lodge, Oromia, Ethiopia',
        },
        contact: 'Contact information for reservations or inquiries',
        website: 'www.simienlodge.com',
        images: [
          {
            url: 'URL of Lodge Image 1',
            caption: 'Simien Lodge Exterior',
          },
          {
            url: 'URL of Lodge Image 2',
            caption: 'Cozy Lodge Room',
          },
        ],
        service: [],
      },
    ],
  },
};

export const _tours_: ITourProps[] = [0, 1, 2, 3].map((_, index) => ({
  id: test.id,
  coverImg: '/assets/images/travel/travel_post_hero.jpg',
  heroImg: [
    '/assets/images/travel/travel_post_hero.jpg',
    '/assets/images/travel/travel_post_01.jpg',
    '/assets/images/travel/travel_post_02.jpg',
    '/assets/images/travel/travel_post_03.jpg',
    '/assets/images/travel/travel_post_04.jpg',
  ][index],
  slug: test.name,
  createdAt: _mock.time(index),
  availableStart: add(new Date(), { months: 2 }),
  availableEnd: add(new Date(), { months: 4 }),
  location: test.location.address,
  continent: 'Africa',
  duration: '3 days 2 nights',
  price: (index % 2 && 159.99) || 269.99,
  priceSale: (index === 2 && 89.99) || (index === 5 && 69.99) || 0,
  reviews: 345,
  favorited: index === 2 || index === 4 || false,
  ratings: 3.5 + index / 10,
  tourGuide: {
    name: _mock.name.fullName(index),
    role: _mock.role(index),
    picture: _mock.image.avatar(index),
    phoneNumber: _mock.phoneNumber(index),
    quotes: 'Member since Mar 15, 2021',
    verified: true,
    ratings: 5,
    reviews: 345,
    about:
      'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.',
    shareLinks: _mock.shareLinks,
  },
  includes: test.activities,
  languages: ['Russian', 'Spanish'],
  tags: test.category,
  gallery: test.images.map((__, itemIndex) => test.images[itemIndex].url),
  description: test.description,
  highlights: test.highlights.map((__, itemIndex) => test.highlights[itemIndex]),
  program: [...Array(3)].map((__, itemIndex) => ({
    label: `Day ${itemIndex + 1}`,
    text: _mock.text.description(itemIndex),
  })),
  shareLinks: _mock.shareLinks,
}));

const _mockTour = _tours_[0];

export default function TravelTourView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Container sx={{ overflow: 'hidden' }}>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Tours', href: "/tours" },
            { name: _mockTour.slug },
          ]}
          sx={{ mt: 3, mb: 5 }}
        />

        <TravelTourDetailsGallery images={_mockTour.gallery} />

        <Grid container columnSpacing={8} rowSpacing={5} direction="row-reverse">
          <Grid xs={12} md={12} lg={12}>
            <TravelTourDetailsHeader tour={_mockTour} />

            <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

            <TravelTourDetailsSummary tour={_mockTour} />
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 10 }} />


      <TravelTourListSimilar tours={_tours.slice(-4)} />

    </>
  );
}
