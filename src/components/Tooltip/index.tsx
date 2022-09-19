import Tooltip from '@mui/material/Tooltip';

import {
  TooltipProps,
} from '../../interfaces/components/Tooltip';

export default function TooltipComponent({
  title,
  children,
  placement,
}: TooltipProps) {
  return (
    <Tooltip
      title={title}
      arrow
      placement={placement}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: '#404042',
            '& .MuiTooltip-arrow': {
              color: '#404042',
            },
          },
        },
      }}
    >
      <div>
        {children}
      </div>
    </Tooltip>
  );
}
