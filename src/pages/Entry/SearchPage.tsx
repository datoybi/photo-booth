import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import PhotoList from './PhotoList';
import ImageList from '@mui/material/ImageList';
import { createTheme, Theme } from '@mui/material/styles';
import { Breakpoint, useMediaQuery } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles/createTheme';
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: false;
    md: true;
    lg: true;
    xl: false;
    mobile: false; // adds the `mobile` breakpoint
    tablet: false;
    laptop: false;
    desktop: false;
  }
}

export const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 350,
      md: 650,
      lg: 900,
    },
  },
};

export default function SearchPage({ imageData }: any) {
  const itemElement = imageData.map((item: { id: string; alt_description: string; urls: { thumb: string } }) => (
    <PhotoList key={item.id} title={item.alt_description} img={item.urls.thumb} />
  ));

  const theme = createTheme(themeOptions);
  const themeValues: Array<Breakpoint> = ['xs', 'md', 'lg'];

  const colsLength = themeValues.reduce((acc: number, el: Breakpoint | number): number => {
    if (useMediaQuery(theme.breakpoints.up(el)) === true) return acc + 1;
    return acc;
  }, 1);

  return (
    <CustomContainer>
      <Paper elevation={0}>
        <Paper
          elevation={3}
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '99%', borderRadius: 4 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="검색어를 입력하세요"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Paper sx={{ mt: '20px', height: '1000px' }} variant="outlined">
          <ImageList variant="masonry" cols={colsLength} gap={8}>
            {imageData && itemElement}
          </ImageList>
        </Paper>
      </Paper>
    </CustomContainer>
  );
}

const CustomContainer = styled(Container)({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  // border: '1px solid',
}) as typeof Container;
