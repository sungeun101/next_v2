// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Stack, Card, CardHeader } from '@mui/material';
// routes
import { PATH_PAGE } from 'src/routes/paths';
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
// sections
import DataGridBasic from 'src/sections/overview/mui/data-grid/DataGridBasic';
import DataGridCustom from 'src/sections/overview/mui/data-grid/DataGridCustom';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

// ----------------------------------------------------------------------

MUIDataGrid.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function MUIDataGrid() {
  return (
    <Page title="Components: DataGrid">
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
              heading="DataGrid"
              links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'DataGrid' }]}
              moreLink="https://material-ui.com/components/data-grid"
            />
          </Container>
        </Box>

        <Container>
          <Stack spacing={5}>
            <Card>
              <CardHeader title="Basic" sx={{ mb: 2 }} />
              <Box sx={{ height: 390 }}>
                <DataGridBasic />
              </Box>
            </Card>

            <Card>
              <CardHeader title="Custom" sx={{ mb: 2 }} />
              <Box sx={{ height: 720 }}>
                <DataGridCustom />
              </Box>
            </Card>
          </Stack>
        </Container>
      </RootStyle>
    </Page>
  );
}
