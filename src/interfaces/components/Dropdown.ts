interface Option {
  name: 'todos' | 'activos' | 'inactivos';
  id: string;
}

export interface DropdownProps {
  options: Array<Option>;
  currentFilter: string;
  onChange: (filterValue: 'todos' | 'activos' | 'inactivos') => void;
}
