import Rating from '@mui/material/Rating';

import {
  RatingProps,
} from '../../interfaces/components/Rating';

export default function BasicRating({
  id,
  max,
  name,
  onClick,
  size,
  value,
}: RatingProps) {
  return (
    <Rating
      name={name}
      value={value}
      size={size}
      max={max}
      onChange={(_e, newValue) => {
        if (!newValue) return;
        onClick(Number(newValue), id);
      }}
    />
  );
}
