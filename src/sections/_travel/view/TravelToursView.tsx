import { useState, useEffect } from 'react';
// @mui
import { Container } from '@mui/material';
// _mock
import { _tours } from 'src/_mock/arrays';
//
import { TravelTourList } from '../tour/list';

// ----------------------------------------------------------------------

export default function TravelToursView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  return (
    <>
      <Container>

        <TravelTourList tours={_tours} loading={loading} />
      </Container>

    </>
  );
}
