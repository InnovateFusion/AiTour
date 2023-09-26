import { useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Divider, Stack, Card, Typography, Box, Link, Checkbox } from '@mui/material';
// routes
// import { paths } from 'src/routes/paths';
// utils
import { fCurrency } from 'src/utils/formatNumber';
// types
import { ITourProps } from 'src/types/tour';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  tour: any;
};

export default function TravelTourItem({ tour }: Props) {
  const { id, name,  highlight, images, description } = tour;

  const [favorite, setFavorite] = useState(false);

  const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };

  return (
    <Card>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: 1.5,
          pl: 2,
          pr: 1.5,
          top: 0,
          width: 1,
          zIndex: 9,
          position: 'absolute',
        }}
      >
        <Stack
          spacing={0.5}
          direction="row"
          sx={{
            px: 1,
            borderRadius: 0.75,
            typography: 'subtitle2',
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          }}
        >
          {}
        </Stack>

        <Checkbox
          color="error"
          checked={favorite}
          onChange={handleChangeFavorite}
          icon={<Iconify icon="carbon:favorite" />}
          checkedIcon={<Iconify icon="carbon:favorite-filled" />}
          sx={{ color: 'common.white' }}
        />
      </Stack>

      <Image alt={name} src={images[0].url} ratio="1/1" />

      <Stack spacing={0.5} sx={{ p: 2.5 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', height:3 }}>
          {/* {description} */}
        </Typography>

        <Link component={NextLink} href={`/dashboard/visit?id=${id}`} color="inherit" >
          <TextMaxLine variant="h6" persistent>
            {name}
          </TextMaxLine>
        </Link>
      </Stack>
    </Card>
  );
}
