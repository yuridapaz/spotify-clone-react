import { VariantProps, cva } from 'class-variance-authority';

export const searchComponentVariants = cva('outline-none', {
  variants: {
    intent: {
      primary: 'bg-neutral-3 rounded-full',
      secondary: 'bg-neutral-2'
      // tertiary: 'bg-white text-black',
    },
    size: {
      small: '',
      medium: '',
      large: '',
      extraLarge: ''
    },
    _content: {
      input: '',
      icon: 'bg-transparent absolute'
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
      className: 'h-6 w-6 left-2 top-1/2 -translate-y-1/2'
    },
    {
      _content: 'icon',
      size: 'extraLarge',
      className: 'h-7 w-7 left-2 top-1/2 -translate-y-1/2'
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
      className: 'px-4 py-3 pl-10'
    },
    {
      _content: 'input',
      intent: 'primary',
      className:
        'transition-colors hover:bg-neutral-2 border border-neutral-3  hover:border-neutral-1 hover:border'
    }
  ]
});
