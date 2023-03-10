import { sentenceCase } from 'change-case';
// @mui
import { useTheme } from '@mui/material/styles';
import { TableRow, Checkbox, TableCell, Typography } from '@mui/material';
// utils
import { fDate } from 'src/utils/formatTime';
import { fCurrency } from 'src/utils/formatNumber';
// @types
import { Product } from 'src/@types/product';
// components
import Label from 'src/components/Label';
import Image from 'src/components/Image';
import { TableMoreMenu } from 'src/components/table';
//

// ----------------------------------------------------------------------

type Props = {
  row: Product;
  selected: boolean;
  onSelectRow: VoidFunction;
  actions?: React.ReactNode;
};

export default function ProductTableRow({ actions, row, selected, onSelectRow }: Props) {
  const theme = useTheme();

  const { name, cover, createdAt, inventoryType, price } = row;

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Image
          disabledEffect
          alt={name}
          src={cover}
          sx={{ borderRadius: 1.5, width: 48, height: 48, mr: 2 }}
        />
        <Typography variant="subtitle2" noWrap>
          {name}
        </Typography>
      </TableCell>

      <TableCell>{fDate(createdAt)}</TableCell>

      <TableCell align="center">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={
            (inventoryType === 'out_of_stock' && 'error') ||
            (inventoryType === 'low_stock' && 'warning') ||
            'success'
          }
          sx={{ textTransform: 'capitalize' }}
        >
          {inventoryType ? sentenceCase(inventoryType) : ''}
        </Label>
      </TableCell>

      <TableCell align="right">{fCurrency(price)}</TableCell>

      <TableCell align="right">
        <TableMoreMenu actions={actions} />
      </TableCell>
    </TableRow>
  );
}
