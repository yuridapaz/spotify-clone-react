import { VariantProps, cva } from 'class-variance-authority';

export const searchComponentVariants = cva('outline-none', {
  variants: {
    intent: {
      primary: 'rounded-full bg-transparent',
      secondary: ''
    },
    size: {
      small: '',
      medium: '',
      large: '',
      extraLarge: ''
    },
    _content: {
      input: '',
      icon: 'absolute'
    }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  },
  compoundVariants: [
    {
      _content: 'icon',
      size: 'small',
      className: 'h-4 w-4 left-2 top-1/2 -translate-y-1/2'
    },
    {
      _content: 'icon',
      size: 'medium',
      className: 'h-5 w-5 left-2 top-1/2 -translate-y-1/2'
    },
    {
      _content: 'icon',
      size: 'large',
      className: 'h-5 w-5 left-3 top-1/2 -translate-y-1/2'
    },
    {
      _content: 'icon',
      size: 'extraLarge',
      className: 'h-7 w-7 left-3 top-1/2 -translate-y-1/2'
    },
    {
      _content: 'input',
      size: 'small',
      className: 'px-2.5 py-1.5 pl-7'
    },
    {
      _content: 'input',
      size: 'medium',
      className: 'px-3 py-2 pl-8'
    },
    {
      _content: 'input',
      size: 'large',
      className: 'px-3.5 py-2.5 pl-9'
    },
    {
      _content: 'input',
      size: 'extraLarge',
      className: 'px-4 py-3 pl-14 w-[420px]'
    },
    {
      _content: 'input',
      intent: 'primary',
      className: 'focus:outline-1.5 focus:-outline-offset-1 focus:outline-white  placeholder:font-light text-white'
    },
    {
      _content: 'icon',
      intent: 'primary',
      className: ''
    }
  ]
});
