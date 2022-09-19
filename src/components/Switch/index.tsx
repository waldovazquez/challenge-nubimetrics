import styles from './Switch.module.css';

import {
  SwitchProps,
} from '../../interfaces/components/Switch';

export default function Switch({
  defaultChecked,
  id,
  onClick,
}: SwitchProps) {
  return (
    <label
      htmlFor={id}
      className={styles.switch}
    >
      <input
        type="checkbox"
        id={id}
        onClick={() => onClick()}
        defaultChecked={defaultChecked}
      />
      <span className={styles.slider} />
    </label>
  );
}
