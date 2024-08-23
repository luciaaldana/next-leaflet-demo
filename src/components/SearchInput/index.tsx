import { useEffect, useState } from 'react';
import { MdOutlineSearch, MdClear } from 'react-icons/md';
import { useDebounce } from '@/hooks/useDebounce';
import { ISearchInput } from '@/types/types';

const SearchInput = <T extends Record<string, any>>({
  placeholder = 'Search...',
  data,
  setFilteredData,
  filteredData,
  filterKeys,
}: ISearchInput<T>): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const debouncedFromText = useDebounce(inputValue);

  useEffect(() => {
    const filterData = () => {
      if (debouncedFromText === '') return setFilteredData(data);
      const filtered = data.filter((item) =>
        filterKeys.some((key) => item[key]?.toString().toLowerCase().startsWith(debouncedFromText.toLowerCase()))
      );
      setFilteredData(filtered);
    };

    filterData();
  }, [debouncedFromText, data]);

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <div className="w-full max-w-screen-lg relative">
      <div className="w-full max-w-screen-lg relative">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full p-2 pr-8 text-sm outline-none border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-50 focus:border-purple-700 overflow-ellipsis whitespace-nowrap"
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue === '' ? (
          <MdOutlineSearch className="text-base absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none text-gray-400" />
        ) : (
          <MdClear
            className="text-base absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer text-rose-400"
            onClick={handleClearInput}
          />
        )}
      </div>
      {data.length > 0 && filteredData.length === 0 && (
        <p role="alert" className="text-rose-400 text-xs absolute bottom-0 transform translate-y-6">
          No results were found for your search.
        </p>
      )}
    </div>
  );
};

export default SearchInput;
