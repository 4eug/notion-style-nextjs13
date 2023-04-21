import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonVariants = cva('inline-flex items-center justify-center ', {
  variants: {
    variant: {
      default: 'bg-black ',
      secondary: 'bg-secondary ',
      outline: 'bg-secondary border-[1px] border-black',
    },
    size: {
      default: 'h-10 py-2 px-4',
      sm: 'h-[48px] lg:w-[123px] px-3 rounded-[12px]',
      lg: 'h-[60px] w-[200px] px-8 text-[24px] rounded-[12px]',
      xl: 'h-[56px] w-[368px]  px-[48px] text-[16px] font-semibold rounded-[8px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  const classes = buttonVariants({ variant, size, className: props.className });

  if ('href' in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};
