import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <div className='join'>
      <input
        type='text'
        placeholder='Get yours now...'
        className='input input-sm md:input-md lg:input-lg input-bordered join-item'
      />
      <button className='btn btn-sm md:btn-md lg:btn-lg join-item btn-primary'>
        <SearchIcon />
      </button>
    </div>
  );
};
export default Search;
