import { topSellers } from '@/constants';
import { PrimaryHeading } from '@/components';
import { Card, SectionWrapper, SectionLink } from '.';

const TopSellers = () => {
  return (
    <SectionWrapper>
      <PrimaryHeading>Top Sellers</PrimaryHeading>
      <ul className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {topSellers.map((sneaker) => (
          <li key={sneaker.id}>
            <Card sneaker={sneaker} tag='TOP SELLER' />
          </li>
        ))}
      </ul>
      <SectionLink href='/sneakers?sort=-sales'>View more</SectionLink>
    </SectionWrapper>
  );
};
export default TopSellers;
