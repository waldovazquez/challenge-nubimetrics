import {
  AiOutlinePlus,
} from 'react-icons/ai';

import {
  ButtonPlusProps,
} from '../../interfaces/components/ButtonPlus';

import styles from './ButtonPlus.module.css';

export default function ButtonPlus({
  openNewRecipe,
  setOpenNewRecipe,
}: ButtonPlusProps) {
  return (
    <button
      className={styles.button__plus}
      onClick={() => setOpenNewRecipe(!openNewRecipe)}
      type="button"
    >
      <AiOutlinePlus className={styles.button__plus__icon} />
    </button>
  );
}
