import {
  ReactNode,
} from 'react';

export interface TooltipProps {
  title: string;
  children: ReactNode;
  placement: 'top' | 'right' | 'bottom' | 'left';
}
