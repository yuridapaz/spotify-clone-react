import React, { InputHTMLAttributes } from 'react';
import { IoSearch } from 'react-icons/io5';
import { searchComponentVariants } from './searchInputVariants';
import { VariantProps } from 'class-variance-authority';

type InputComponent = Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder'>;
type SearchComponentVariantProps = Omit<VariantProps<typeof searchComponentVariants>, '_content'>;

type SearchInputProps = InputComponent & SearchComponentVariantProps;

const SearchInput = ({ intent, size, placeholder }: SearchInputProps) => {
  return (
    <div className="relative inline-block ">
      <IoSearch
        className={searchComponentVariants({ intent, size, _content: 'icon' })}
        color="#ffffffb9"
      />
      <input
        type="text"
        className={searchComponentVariants({ intent, size, _content: 'input' })}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
