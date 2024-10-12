import { ReactNode } from 'react';

export interface IButtonProps {
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode; // Deve ser ReactNode para aceitar qualquer tipo de nó.
  disabled?: boolean;
  
}