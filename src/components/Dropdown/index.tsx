import {
  useState,
} from 'react';

import {
  BsChevronDown, BsChevronUp,
} from 'react-icons/bs';

import {
  DropdownProps,
} from '../../interfaces/components/Dropdown';

import styles from './Dropdown.module.css';

export default function Dropdown({
  options,
  setCurrentFilter,
  currentFilter = 'todos',
}: DropdownProps) {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <button
      className={styles.button__filter}
      onClick={() => setOpenFilter(!openFilter)}
      type="button"
    >
      <p className={styles.button__filter__title}>
        Cocido antes:
      </p>
      <p className={styles.button__filter__value}>
        {currentFilter}
      </p>
      {openFilter ? <BsChevronUp className={styles.button__filter__icon} /> : <BsChevronDown className={styles.button__filter__icon} />}
      {
        openFilter && (
          <div className={styles.button__filter__menu}>
            {options.map((item) => (
              <div
                key={item.id}
                className={styles.button__filter__menu__options}
              >
                <span className={styles.button__filter__menu__options__name}>
                  {item.name}
                </span>
                <input
                  type="radio"
                  name={item.name}
                  value={item.name}
                  className={styles.button__filter__menu__options__input}
                  onClick={() => setCurrentFilter(item.name)}
                  defaultChecked={item.name === currentFilter}
                />
              </div>
            ))}
          </div>
        )
      }
    </button>
  );
}
