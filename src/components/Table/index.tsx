import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import BasicRating from '../Rating';
import Switch from '../Switch';

import {
  TableProps,
} from '../../interfaces/components/Table';

export default function BasicTable({
  optionsContent = [],
  optionsHeader = [],
}: TableProps) {
  function updatingRating(newValue: number, recipeId: string) {
    console.info('updating rating...', newValue, recipeId);
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: 'none',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {
              optionsHeader.map((option) => (
                <TableCell
                  sx={{
                    fontSize: '12px',
                    fontWeight: 600,
                    lineHeight: '16px',
                    color: '#79797A',
                    borderBottom: '1px solid #B1C4D1',
                    paddingLeft: '8px',
                  }}
                  key={`${option.id}-${option.name}`}
                >
                  {option.name}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {optionsContent.map((option) => (
            <TableRow key={`${option.id}-${option.name}`}>
              <TableCell
                sx={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  padding: '8px',
                  color: option.cookedBefore ? '#19191A' : '#79797A',
                }}
              >
                {option.name}
              </TableCell>
              <TableCell
                sx={{
                  padding: '8px',
                }}
              >
                <BasicRating
                  name={option.name}
                  id={option.id}
                  size="small"
                  value={option.score}
                  max={4}
                  onClick={(newValue, recipeId) => updatingRating(newValue, recipeId)}
                />
              </TableCell>
              <TableCell sx={{
                padding: '8px',
              }}
              >
                <Switch
                  defaultChecked={option.cookedBefore}
                  id={`${option.id}-${option.name}`}
                  onClick={() => console.info(`${option.name} clicked!`)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
