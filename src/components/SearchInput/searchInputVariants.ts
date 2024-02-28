import { VariantProps, cva } from 'class-variance-authority';

export const searchComponentVariants = cva('', {
  variants: {
    intent: {
      primary: 'bg-neutral-3 rounded-full',
      secondary: 'bg-neutral-2'
      // tertiary: 'bg-white text-black',
    },
    size: {
      small: 'px-2.5 py-1.5',
      medium: 'px-3 py-2',
      large: 'px-3.5 py-2.5',
      extraLarge: 'px-4 py-3'
    },
    _icon: { true: 'absolute' }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  },
  compoundVariants: [
    {
      _icon: true,
      size: 'small',
      className: 'h-4 w-4 left-2 top-1/2 -translate-y-1/2  px-0 py-0'
    },
    {
      _icon: true,
      size: 'medium',
      className: 'h-5 w-5  left-2 top-1/2 -translate-y-1/2  px-0 py-0'
    },
    { _icon: true, size: 'large', className: 'h-6 w-6  left-2 top-1/2 -translate-y-1/2 px-0 py-0' },
    {
      _icon: true,
      size: 'extraLarge',
      className: 'h-7 w-7  left-2 top-1/2 -translate-y-1/2 px-0 py-0'
    }
  ]
});
