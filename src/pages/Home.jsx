import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

// components
import Chart from '../components/Chart';
import Container from '../components/Container';

const Home = () => {
  const [searchParams] = useSearchParams();
  const currentParams = Object.fromEntries([...searchParams]);

  // to check if we have query to render the chart component
  const isRenderChart = useMemo(() => {
    return currentParams.period1 && currentParams.period2 && currentParams.interval;
  }, [currentParams.period1, currentParams.period2, currentParams.interval]);

  return <Container>{isRenderChart && <Chart />}</Container>;
};

export default Home;
