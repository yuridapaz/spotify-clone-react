import { cva } from 'class-variance-authority';

export const buttonVariants = cva('transition-all cursor-pointer disabled:cursor-not-allowed', {
  variants: {
    intent: {
      primary: 'bg-[#1fdf64] text-black',
      secondary: 'bg-black text-neutral-5 hover:text-white',
      tertiary: 'bg-white text-black',
      quaternary: 'bg-neutral-4 text-neutral-5 hover:text-white',
      outline: 'bg-none outline outline-1 outline-black',
      invisible: 'bg-none'
    },
    size: {
      extraSmall: '',
      small: '',
      medium: '',
      large: '',
      extraLarge: ''
    },
    bold: {
      true: 'font-bold'
    },
    fullWidth: {
      true: 'w-full'
    },
    marginAuto: {
      true: 'm-auto'
    },
    rounded: {
      medium: '',
      full: 'rounded-full'
    },
    _content: {
      text: '',
      textAndIcon: 'inline-flex items-center gap-2',
      icon: ''
    }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
    rounded: 'full',
    _content: 'text'
  },
  compoundVariants: [
    { _content: 'icon', size: 'extraSmall', className: 'px-1.5 py-1.5 ' },
    { _content: 'icon', size: 'small', className: 'px-2.5 py-2.5' },
    { _content: 'icon', size: 'medium', className: 'px-3 py-3' },
    { _content: 'icon', size: 'large', className: 'px-3.5 py-3.5' },
    { _content: 'icon', size: 'extraLarge', className: 'px-4 py-4' },
    { _content: 'text', size: 'extraSmall', className: 'px-2.5 py-1.5 text-xs' },
    { _content: 'text', size: 'small', className: 'px-3 py-2 text-sm' },
    { _content: 'text', size: 'medium', className: 'px-4 py-3 text-sm' },
    { _content: 'text', size: 'large', className: 'px-4.5 py-3.5 text-base' },
    { _content: 'text', size: 'extraLarge', className: 'px-5 py-4 text-lg' }
  ]
});
