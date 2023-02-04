// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from 'src/routes/paths';
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
// sections
import { Block } from 'src/sections/overview/Block';
import SimpleTransferList from 'src/sections/overview/mui/transfer-list/SimpleTransferList';
import EnhancedTransferList from 'src/sections/overview/mui/transfer-list/EnhancedTransferList';

// ----------------------------------------------------------------------

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
} as const;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

// ----------------------------------------------------------------------

MUITransferList.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function MUITransferList() {
  return (
    <Page title="Components: Transfer List">
      <RootStyle>
        <Box
          sx={{
            pt: 6,
            pb: 1,
            mb: 10,
            bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
          }}
        >
          <Container>
            <HeaderBreadcrumbs
              heading="Transfer List"
              links={[
                { name: 'Components', href: PATH_PAGE.components },
                { name: 'Transfer List' },
              ]}
              moreLink="https://mui.com/components/transfer-list"
            />
          </Container>
        </Box>

        <Container>
          <Stack spacing={3}>
            <Block title="Simple" sx={style}>
              <SimpleTransferList />
            </Block>

            <Block title="Enhanced" sx={style}>
              <EnhancedTransferList />
            </Block>
          </Stack>
        </Container>
      </RootStyle>
    </Page>
  );
}
