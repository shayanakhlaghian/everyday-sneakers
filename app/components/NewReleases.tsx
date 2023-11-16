import { newReleases } from '@/constants';
import { PrimaryHeading } from '@/components';
import { Card, SectionWrapper, SectionLink } from '.';

const NewReleases = () => {
  return (
    <SectionWrapper>
      <PrimaryHeading>New Releases</PrimaryHeading>
      <ul className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {newReleases.map((sneaker) => (
          <li key={sneaker.id}>
            <Card sneaker={sneaker} tag='NEW' />
          </li>
        ))}
      </ul>
      <SectionLink href='/sneakers?sort=-dateAdded'>View more</SectionLink>
    </SectionWrapper>
  );
};
export default NewReleases;
