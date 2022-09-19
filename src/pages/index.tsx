import {
  useState,
} from 'react';

import Main from '../assets/main.svg';
import Logo from '../assets/logo.svg';

import InputSearch from '../components/InputSearch';
import ButtonFilter from '../components/Dropdown';
import Table from '../components/Table';
import ButtonPlus from '../components/ButtonPlus';
import TooltipComponent from '../components/Tooltip';
import DrawerComponent from '../components/Drawer';

import recipes from '../utils/constants';

import styles from './Home.module.css';

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const [currentFilter, setCurrentFilter] = useState<string>('todos');
  const [openNewRecipe, setOpenNewRecipe] = useState<boolean>(false);

  return (
    <>
      <div className={styles.navbar__container}>
        <img
          className={styles.navbar__logo}
          src={Logo}
          alt="Logo"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.container__main}>
          <img
            className={styles.container__main__image}
            src={Main}
            alt="MainImage"
          />
        </div>
        <div className={styles.container__content}>
          <div className={styles.container__content__container}>
            <h2 className={styles.container__content__container__title}>
              Recetas de Cocina
            </h2>
            <div className={styles.container__content__container__filters}>
              <InputSearch
                setValue={setSearch}
                value={search}
              />
              <div className={styles.container__content__container__filters__button}>
                <ButtonFilter
                  options={[{
                    name: 'todos',
                    id: '1',
                  },
                  {
                    name: 'activos',
                    id: '2',
                  },
                  {
                    name: 'inactivos',
                    id: '3',
                  },
                  ]}
                  currentFilter={currentFilter}
                  setCurrentFilter={setCurrentFilter}
                />
              </div>
            </div>
            <div className={styles.container__table}>
              <Table
                optionsContent={recipes}
                optionsHeader={[
                  {
                    name: 'Nombre de la receta',
                    id: '1',
                  },
                  {
                    name: 'Reseñas',
                    id: '2',
                  },
                  {
                    name: 'Cocinado antes',
                    id: '3',
                  },
                ]}
              />
            </div>
            <div className={styles.container__button}>
              <TooltipComponent
                title="Añadir receta"
                placement="left"
              >
                <ButtonPlus
                  openNewRecipe={openNewRecipe}
                  setOpenNewRecipe={setOpenNewRecipe}
                />
              </TooltipComponent>
            </div>
            {openNewRecipe && (
              <DrawerComponent
                openNewRecipe={openNewRecipe}
                setOpenNewRecipe={setOpenNewRecipe}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
