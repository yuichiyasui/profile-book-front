import { ReactNode } from 'react';
import styles from './Button.module.scss';

type Props = {
  onClick: () => void;
  className: string;
  children?: ReactNode;
};

export const Button = ({ onClick, className = '', children }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};
