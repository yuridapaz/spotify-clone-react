import React, { ButtonHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './buttonVariants';

type ButtonComponent = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled' | 'onClick' | 'children' | 'className'
>;
type ButtonVariantProps = Omit<VariantProps<typeof buttonVariants>, '_content'>;

type ReactIconComponent = React.ReactNode;

type ButtonProps = ButtonComponent &
  Partial<ButtonVariantProps> &
  (
    | { leadingIcon?: ReactIconComponent; trailingIcon?: never }
    | { leadingIcon?: never; trailingIcon?: ReactIconComponent }
  ) & { 'data-testid'?: string };

export const Button = ({
  disabled,
  onClick,
  children,
  className,
  'data-testid': dataTestId,
  intent,
  bold,
  fullWidth,
  size,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={buttonVariants({
        intent,
        bold,
        className,
        fullWidth,
        size,
        _content: LeadingIcon || TrailingIcon ? 'textAndIcon' : 'text',
      })}
      data-testId={dataTestId}
    >
      {LeadingIcon ? LeadingIcon : null}
      {children}
      {TrailingIcon ? TrailingIcon : null}
    </button>
  );
};

type IconButtonProps = Omit<
  ButtonProps,
  'rounded' | 'leadingIcon' | 'trailingIcon' | 'children' | 'bold' | 'fullWidth'
> & {
  icon: ReactIconComponent;
};

export const IconButton = ({ icon: Icon, intent, className, size }: IconButtonProps) => {
  return (
    <button
      className={buttonVariants({
        intent,
        className,
        size,
        rounded: 'full',
        _content: 'icon',
      })}
    >
      {Icon}
    </button>
  );
};
