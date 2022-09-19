import {
  useState,
  ChangeEvent,
  Fragment,
} from 'react';

import Drawer from '@mui/material/Drawer'

import {
  MdClose,
} from 'react-icons/md';

import Switch from '../Switch';

import Ingredients from './components/Ingredients';
import RatingComponent from './components/Rating';

import {
  Ingredient,
  DrawerProps,
  Rating,
} from '../../interfaces/components/Drawer';

import styles from './Drawer.module.css';
import Textarea from './components/Textarea';

const initialIngredientes = [{
  value: '',
  id: '0',
}, {
  value: '',
  id: '1',
},
];

const initialRating = [
  {
    value: 1,
    id: '0',
    selected: true,
  },
  {
    value: 2,
    id: '1',
    selected: false,
  },
  {
    value: 3,
    id: '2',
    selected: false,
  },
  {
    value: 4,
    id: '3',
    selected: false,
  },
];

export default function DrawerComponent({
  openNewRecipe,
  setOpenNewRecipe,
}: DrawerProps) {
  const [title, setTitle] = useState<string>('');
  const [ingredients, setIngredients] = useState<Array<Ingredient>>(initialIngredientes);
  const [instructions, setInstructions] = useState<string>('');
  const [rating, setRating] = useState<Array<Rating>>(initialRating);
  const [cookedBefore, setCookedBefore] = useState<boolean>(true);

  function updatingIngredients(position: number, e: ChangeEvent<HTMLInputElement>) {
    const oldIngredientes = [...ingredients];
    oldIngredientes[position].value = e.target.value;
    setIngredients(oldIngredientes);
  }

  function deletingIngredient(position: number) {
    const newIngredientes = ingredients.filter((_item, index) => index !== position);
    setIngredients(newIngredientes);
  }

  function addingIngredient(ingredientId: string) {
    const oldIngredientes = [...ingredients];
    oldIngredientes.push({
      value: '',
      id: (Number(ingredientId) + 1).toString(),
    });
    setIngredients(oldIngredientes);
  }

  function updatingRating(value: number) {
    const newRating = rating.map((item) => {
      if (item.value === value) {
        return {
          ...item,
          selected: true,
        };
      }
      return {
        ...item,
        selected: false,
      };
    });
    setRating(newRating);
  }

  function saveRecipe() {
    console.info('saving...');
    setOpenNewRecipe(false);
  }

  return (
    <Drawer
      anchor="right"
      open={openNewRecipe}
      onClose={() => setOpenNewRecipe(false)}
    >
      <div className={styles.drawer}>
        <div className={styles.drawer__container}>
          <div className={styles.drawer__container__top}>
            <h3 className={styles.drawer__container__top__title}>
              Nueva Receta
            </h3>
            <button
              className={styles.drawer__container__top__button}
              onClick={() => setOpenNewRecipe(false)}
              type="button"
            >
              <MdClose className={styles.drawer__container__top__button__icon} />
            </button>
          </div>
          <div className={styles.drawer__container__recipeName}>
            <p className={styles.drawer__container__recipeName__title}>
              Nombre de la receta
            </p>
            <Textarea
              height="54px"
              label="Título*"
              placeholder="P.ej. Olla caliente de carne y arroz en olla de cocción lenta"
              setValue={setTitle}
              value={title}
              width="100%"
            />
          </div>
          <div className={styles.drawer__container__ingredients}>
            <p className={styles.drawer__container__ingredients__title}>
              Ingredientes
            </p>
            <div className={styles.drawer__container__ingredients__container}>
              {
                ingredients.map((item, index) => (
                  <Fragment key={item.id}>
                    <Ingredients
                      addingIngredient={(ingredientId) => addingIngredient(ingredientId)}
                      count={ingredients.length}
                      deletingIngredient={(position) => deletingIngredient(position)}
                      ingredient={item}
                      position={index}
                      updatingIngredients={(position, event) => updatingIngredients(position, event)}
                    />
                  </Fragment>
                ))
              }
            </div>
          </div>
          <div className={styles.drawer__container__preparation}>
            <p className={styles.drawer__container__preparation__title}>Preparación</p>
            <Textarea
              height="172px"
              label="Instrucciones*"
              placeholder="Escribe los pasos..."
              setValue={setInstructions}
              value={instructions}
              width="100%"
            />
          </div>
          <div className={styles.drawer__container__review}>
            <h3 className={styles.drawer__container__review__title}>Reseñas</h3>
            <div className={styles.drawer__container__review__container__inputs}>
              {
                rating.map((item, index) => (
                  <Fragment key={item.id}>
                    <RatingComponent
                      position={index}
                      rating={item}
                      updatingRating={(value) => updatingRating(value)}
                    />
                  </Fragment>
                ))
              }
            </div>
          </div>
          <div className={styles.drawer__container__cookedBefore}>
            <h3 className={styles.drawer__container__cookedBefore__title}>Cocinado Antes</h3>
            <Switch
              defaultChecked={cookedBefore}
              id="cookedBefore"
              onClick={() => setCookedBefore(!cookedBefore)}
            />
          </div>
          <div className={styles.drawer__container__save__container}>
            <button
              className={styles.drawer__container__save__container__button}
              onClick={() => saveRecipe()}
              type="button"
            >
              Crear
            </button>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
