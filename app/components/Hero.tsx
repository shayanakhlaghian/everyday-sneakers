import { SneakerCanvas, Stats, SneakerBg, Text, Search } from '.';

const Hero = () => {
  return (
    <section className='min-h-screen'>
      <div className='flex flex-col lg:flex-row justify-between lg:px-10 relative'>
        <div className='w-full lg:w-1/2 h-[100vh]'>
          <SneakerBg />
          <SneakerCanvas />
        </div>
        <div className='w-full lg:w-1/2 px-2 md:px-8 lg:px-16 flex items-center justify-center'>
          <div className='flex flex-col items-center [&>*]:mb-8 [&>*]:md:mb-12'>
            <Text />
            <Search />
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
