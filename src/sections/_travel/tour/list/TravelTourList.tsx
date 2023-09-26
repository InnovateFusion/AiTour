// @mui
import { Pagination, Box } from '@mui/material';
// types
import { ITourProps } from 'src/types/tour';
//
import { TravelTourItem, TravelTourItemSkeleton } from '../item';

// ----------------------------------------------------------------------

type Props = {
  tours: ITourProps[];
  loading?: boolean;
  tourists?: any;
};

export default function TravelTourList({ tours, loading, tourists }: Props) {
  return (
    <>
      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {(loading ? [...Array(12)] : tourists).map((tour: any, index: number) =>
          tour ? (
            <TravelTourItem key={tour.id} tour={tour} />
          ) : (
            <TravelTourItemSkeleton key={index} />
          )
        )}
      </Box>

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          my: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
