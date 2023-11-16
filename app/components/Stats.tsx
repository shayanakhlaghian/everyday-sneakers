import { heroStats } from '@/constants';

const Stats = () => {
  return (
    <div className='stats stats-vertical lg:stats-horizontal justify-center shadow-md'>
      {heroStats.map(({ id, title, value }) => (
        <div key={id} className='stat place-items-center'>
          <div className='stat-value'>{value}</div>
          <div className='stat-title'>{title}</div>
        </div>
      ))}
    </div>
  );
};
export default Stats;
