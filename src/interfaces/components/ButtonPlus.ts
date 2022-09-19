import {
  Dispatch,
  SetStateAction,
} from 'react';

export interface ButtonPlusProps {
  openNewRecipe: boolean;
  setOpenNewRecipe: Dispatch<SetStateAction<boolean>>;
}
