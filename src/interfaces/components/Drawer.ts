import {
  Dispatch,
  SetStateAction,
} from 'react';

export interface Ingredient {
    value: string;
    id: string;
}

export interface Rating {
    value: number;
    id: string;
    selected: boolean;
}

export interface DrawerProps {
    openNewRecipe: boolean;
    setOpenNewRecipe: Dispatch<SetStateAction<boolean>>;
}
