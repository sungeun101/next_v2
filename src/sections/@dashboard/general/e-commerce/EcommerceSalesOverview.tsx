// @mui
import { Card, CardHeader, Typography, Stack, LinearProgress } from '@mui/material';
// utils
import { fPercent, fCurrency } from 'src/utils/formatNumber';
// _mock_
import { _ecommerceSalesOverview } from 'src/_mock';

// ----------------------------------------------------------------------

export default function EcommerceSalesOverview() {
  return (
    <Card>
      <CardHeader title="Sales Overview" />
      <Stack spacing={4} sx={{ p: 3 }}>
        {_ecommerceSalesOverview.map((progress) => (
          <ProgressItem key={progress.label} progress={progress} />
        ))}
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

type ProgressItemProps = {
  progress: {
    label: string;
    amount: number;
    value: number;
  };
};

function ProgressItem({ progress }: ProgressItemProps) {
  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center">
        <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
          {progress.label}
        </Typography>
        <Typography variant="subtitle2">{fCurrency(progress.amount)}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          &nbsp;({fPercent(progress.value)})
        </Typography>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={progress.value}
        color={
          (progress.label === 'Total Income' && 'info') ||
          (progress.label === 'Total Expenses' && 'warning') ||
          'primary'
        }
      />
    </Stack>
  );
}
