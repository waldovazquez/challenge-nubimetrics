import {
  Rating,
} from '../../../../interfaces/components/Drawer';

import styles from './Rating.module.css';

interface RatingProps {
  rating: Rating;
  position: number;
  updatingRating: (value: number) => void
}

export default function RatingComponent({
  rating,
  position,
  updatingRating,
}: RatingProps) {
  return (
    <div className={styles.drawer__container__review__container__inputs__content}>
      <input
        type="radio"
        value={rating.value}
        className={styles.drawer__container__review__container__inputs__content__input}
        onChange={() => updatingRating(rating.value)}
        checked={rating.selected}
      />
      <p className={styles.drawer__container__review__container__inputs__content__position}>
        {position + 1}
      </p>
    </div>
  );
}
