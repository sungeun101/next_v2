// @mui
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { fToNow } from 'src/utils/formatTime';
// _mock_
import { _analyticPost } from 'src/_mock';
// components
import Image from 'src/components/Image';
import Iconify from 'src/components/Iconify';
import Scrollbar from 'src/components/Scrollbar';

// ----------------------------------------------------------------------

export default function AnalyticsNewsUpdate() {
  return (
    <Card>
      <CardHeader title="News Update" />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {_analyticPost.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

type NewsItemProps = {
  news: {
    id: string;
    title: string;
    description: string;
    postedAt: number | Date;
    image: string;
  };
};

function NewsItem({ news }: NewsItemProps) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Image
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
      />
      <Box sx={{ minWidth: 240 }}>
        <Link color="inherit">
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fToNow(postedAt)}
      </Typography>
    </Stack>
  );
}
