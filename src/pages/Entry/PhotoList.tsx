import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Breakpoint, useMediaQuery } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';
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

export default function PhotoList() {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];

  const theme = createTheme(themeOptions);
  const themeValues: Array<Breakpoint> = ['xs', 'md', 'lg'];

  const result = themeValues.reduce((acc: number, el: Breakpoint | number): number => {
    if (useMediaQuery(theme.breakpoints.up(el)) === true) return acc + 1;
    return acc;
  }, 1);

  return (
    // TODO: cols동적으로 변하게하기
    <ImageList variant="masonry" cols={result} gap={8}>
      {itemData.map(item => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            title={item.title}
            position="top"
            actionIcon={
              <IconButton sx={{ color: 'white' }} aria-label={`star ${item.title}`}>
                <FavoriteBorderIcon />
              </IconButton>
            }
            actionPosition="left"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
