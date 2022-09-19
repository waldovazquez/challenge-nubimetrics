import {
  Dispatch,
  SetStateAction,
} from 'react';

export interface InputSearchProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>
}
