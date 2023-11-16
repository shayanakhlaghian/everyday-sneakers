import Link from 'next/link';

const Logo = () => {
  return (
    <Link className='btn btn-ghost' href='/'>
      <h1 className='text-primary-secondary text-base font-bold tracking-wide md:text-xl lg:text-2xl'>
        <span className='lg:mr-2'>Everyday</span>
        <br className='block lg:hidden' />
        Sneakers
      </h1>
    </Link>
  );
};
export default Logo;
