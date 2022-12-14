import {
  IoIosSearch,
} from 'react-icons/io';

import {
  InputSearchProps,
} from '../../interfaces/components/InputSearch';

import styles from './InputSearch.module.css';

export default function InputSearch({
  value,
  onChange = () => { },
}: InputSearchProps) {
  return (
    <div className={styles.group}>
      <IoIosSearch className={styles.icon} />
      <input
        placeholder="Buscador"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="search"
        className={styles.inputSearch}
      />
    </div>
  );
}
