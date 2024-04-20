import React, { InputHTMLAttributes } from 'react';

import { IoSearch } from 'react-icons/io5';
import { VariantProps } from 'class-variance-authority';
import { searchComponentVariants } from './searchInputVariants';

type InputComponent = Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'className'>;
type SearchComponentVariantProps = Omit<VariantProps<typeof searchComponentVariants>, '_content'>;

type SearchInputProps = InputComponent & SearchComponentVariantProps;

const SearchInput = ({ intent, size, placeholder }: SearchInputProps) => {
  return (
    <div className='hover:border-neutral-5 duration-3=–00 relative inline-block rounded-full border border-black bg-neutral-4 text-neutral-3 transition ease-in-out hover:cursor-pointer hover:bg-zinc-700 hover:text-white'>
      <IoSearch className={`${searchComponentVariants({ intent, size, _content: 'icon' })}`} />
      <input
        type='text'
        className={`${searchComponentVariants({ intent, size, _content: 'input' })} cursor-pointer`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
