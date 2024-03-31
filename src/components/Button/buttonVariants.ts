import { cva } from 'class-variance-authority';

export const buttonVariants = cva('transition-all cursor-pointer disabled:cursor-not-allowed', {
  variants: {
    intent: {
      primary: 'bg-[#1fdf64] text-black',
      secondary: 'bg-black text-white',
      tertiary: 'bg-white text-black',
      outline: 'bg-none outline outline-1 outline-black',
      invisible: 'bg-none'
    },
    size: {
      extraSmall: 'px-2 py-1.5',
      small: 'px-2.5 py-1.5',
      medium: 'px-3 py-2',
      large: 'px-3.5 py-2.5',
      extraLarge: 'px-4 py-3'
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
    { _content: 'icon', size: 'extraSmall', className: 'px-2 py-2 ' },
    { _content: 'icon', size: 'small', className: 'px-2.5 py-2.5' },
    { _content: 'icon', size: 'medium', className: 'px-3 py-3' },
    { _content: 'icon', size: 'large', className: 'px-3.5 py-3.5' },
    { _content: 'icon', size: 'extraLarge', className: 'px-4 py-4' }
  ]
});
