import React from 'react';
import EnhancedPage from '../../components/blocks/enhaced-page';
import SpecialityCarousel from '../../components/blocks/speciality-carousel';
import TitleAndDescription from '../../components/blocks/title-and-description';
import Search from '../../components/blocks/search';

const Main: React.FC = () => {
  return (
    <EnhancedPage>
      <Search />
      <TitleAndDescription />
      <SpecialityCarousel />
    </EnhancedPage>
  );
};

export default Main;
