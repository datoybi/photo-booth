import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type PhotoListProps = {
  title: string;
  img: string;
};

export default function PhotoList({ title, img }: PhotoListProps) {
  return (
    <ImageListItem>
      <img
        src={`${img}?w=248&fit=crop&auto=format`}
        srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
      />
      <ImageListItemBar
        sx={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        }}
        title={title}
        position="top"
        actionIcon={
          <IconButton sx={{ color: 'white' }} aria-label={`star ${title}`}>
            <FavoriteBorderIcon />
          </IconButton>
        }
        actionPosition="left"
      />
    </ImageListItem>
  );
}
