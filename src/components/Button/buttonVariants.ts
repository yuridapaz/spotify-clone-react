import { cva } from 'class-variance-authority';

export const buttonVariants = cva('transition-all cursor-pointer disabled:cursor-not-allowed', {
  variants: {
    intent: {
      primary: 'bg-[#1fdf64] text-black',
      secondary: 'bg-white text-black',
      tertiary: 'bg-neutral-4 text-white hover:bg-white/10',
      outline: 'bg-none outline outline-1 outline-black',
      invisible: 'bg-none text-neutral-5'
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
    { _content: 'icon', size: 'extraSmall', className: 'px-1.5 py-1.5' },
    { _content: 'icon', size: 'small', className: 'px-2.5 py-2.5' },
    { _content: 'icon', size: 'medium', className: 'px-3 py-3' },
    { _content: 'icon', size: 'large', className: 'px-3.5 py-3.5' },
    { _content: 'icon', size: 'extraLarge', className: 'px-4 py-4' },
    { _content: ['text', 'textAndIcon'], size: 'extraSmall', className: 'px-2.5 py-1.5 text-xs' },
    { _content: ['text', 'textAndIcon'], size: 'small', className: 'px-3 py-2 text-sm' },
    { _content: ['text', 'textAndIcon'], size: 'medium', className: 'px-4 py-3 text-sm' },
    { _content: ['text', 'textAndIcon'], size: 'large', className: 'p-4 text-base' },
    { _content: ['text', 'textAndIcon'], size: 'extraLarge', className: 'px-5 py-4 text-lg' }
  ]
});
