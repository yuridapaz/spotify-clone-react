import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { searchComponentVariants } from './searchInputVariants';
import { VariantProps } from 'class-variance-authority';

type SearchComponentVariantProps = VariantProps<typeof searchComponentVariants>;

type SearchComponentProps = SearchComponentVariantProps;

const SearchInput = ({ intent, size, _icon }: SearchComponentProps) => {
  return (
    <div className="relative inline-block">
      <CiSearch className={searchComponentVariants({ intent, size, _icon: true })} />
      <input type="text" className={searchComponentVariants({ intent, size })} />
    </div>
  );
};

export default SearchInput;
