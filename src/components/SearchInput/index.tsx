import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { searchComponentVariants } from './searchInputVariants';
import { VariantProps } from 'class-variance-authority';

type SearchComponentVariantProps = VariantProps<typeof searchComponentVariants>;

const SearchInput = ({ intent, size }: SearchComponentVariantProps) => {
  return (
    <div className="relative inline-block ">
      <input type="text" className={searchComponentVariants({ intent, size, _content: 'input' })} />
      <IoSearch className={searchComponentVariants({ intent, size, _content: 'icon' })} />
    </div>
  );
};

export default SearchInput;
