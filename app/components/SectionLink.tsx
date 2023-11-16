import type { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const SectionLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: Url;
}) => {
  return (
    <div className='mt-8 flex justify-center lg:justify-start'>
      <Link href={href} className='btn btn-outline lg:btn-lg capitalize'>
        {children}
        <ChevronRight />
      </Link>
    </div>
  );
};
export default SectionLink;
