import {
  Recipes,
} from '../utils/constants';

export interface OptionHeader {
  name: string;
  id: string;
}

export interface TableProps {
  optionsContent: Array<Recipes>;
  optionsHeader: Array<OptionHeader>;
}
