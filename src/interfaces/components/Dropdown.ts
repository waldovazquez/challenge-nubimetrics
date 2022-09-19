import {
  Dispatch,
  SetStateAction,
} from 'react';

interface Option {
  name: string;
  id: string;
}

export interface DropdownProps {
  options: Array<Option>;
  currentFilter: string;
  setCurrentFilter: Dispatch<SetStateAction<string>>;
}
