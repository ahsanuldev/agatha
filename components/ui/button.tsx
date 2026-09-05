import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'font-mono uppercase tracking-[1px] font-medium rounded-full inline-flex items-center justify-center transition-colors duration-200 focus:outline-none';

  const variantStyles = {
    primary: 'bg-[#987F28] text-white hover:bg-[#7F6A1E]',
    secondary: 'bg-[#484848] text-[#DDD] hover:bg-white hover:text-black',
    dark: 'bg-[#212121] text-white hover:bg-[#111111]',
    outline: 'border border-[#987F28] text-[#987F28] hover:bg-[#987F28] hover:text-white',
    ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/10',
  };

  const sizeStyles = {
    sm: 'px-5 py-2 text-[11px]',
    md: 'px-7 py-3 text-[12px]',
    lg: 'px-9 py-4 text-[14px]',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
