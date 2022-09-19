import {
  ChangeEvent,
} from 'react';

import {
  AiOutlinePlusCircle,
} from 'react-icons/ai';

import {
  HiOutlineTrash,
} from 'react-icons/hi';

import {
  Ingredient,
} from '../../../../interfaces/components/Drawer';

import styles from './Ingredients.module.css';

interface IngredientsProps {
  addingIngredient: (ingredientId: string) => void;
  count: number;
  deletingIngredient: (position: number) => void;
  ingredient: Ingredient;
  position: number;
  updatingIngredients: (position: number, event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Ingredients({
  addingIngredient,
  count,
  deletingIngredient,
  ingredient,
  position,
  updatingIngredients,
}: IngredientsProps) {
  return (
    <div className={styles.drawer__container__ingredients__container__inputs}>
      <p className={styles.drawer__container__ingredients__container__inputs__position}>
        {position + 1}
      </p>
      <input
        className={styles.drawer__container__ingredients__container__inputs__input}
        onChange={(event) => updatingIngredients(position, event)}
        placeholder="Tipo de Ingrediente"
        value={ingredient.value}
      />
      {
        position !== count - 1 ? (
          <button
            className={styles.drawer__container__ingredients__container__inputs__icon__button}
            onClick={() => deletingIngredient(position)}
            type="button"
          >
            <HiOutlineTrash
              className={styles.drawer__container__ingredients__container__inputs__icon__trash}
            />
          </button>
        ) : (
          <button
            type="button"
            className={styles.drawer__container__ingredients__container__inputs__icon__button}
            onClick={() => addingIngredient(ingredient.id)}
          >
            <AiOutlinePlusCircle
              className={styles.drawer__container__ingredients__container__inputs__icon__plus}
            />
          </button>
        )
      }
    </div>
  );
}
