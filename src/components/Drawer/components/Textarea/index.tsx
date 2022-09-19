import {
  Dispatch,
  SetStateAction,
} from 'react';

import styles from './Textarea.module.css';

interface TextareaProps {
  label: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<string>>
  value: string;
  width: string;
  height: string;
}

export default function Textarea({
  height,
  label,
  placeholder,
  setValue,
  value,
  width,
}: TextareaProps) {
  return (
    <div className={styles.textarea}>
      <textarea
        className={styles.textarea__text}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        value={value}
        style={{
          height,
          width,
        }}
      />
      {value.length === 0 && <label className={styles.textarea__label}>{label}</label>}
    </div>
  );
}
