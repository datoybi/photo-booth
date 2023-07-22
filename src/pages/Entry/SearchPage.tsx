import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';

export default function SearchPage() {
  return (
    <CustomContainer>
      <Paper elevation={0}>
        <Paper
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
          <p>dd</p>
        </Paper>
      </Paper>
    </CustomContainer>
  );
}

const InnerContainer = styled(Container)({
  paddingRight: '25px',
  // border: '1px solid',
}) as typeof Container;

const CustomContainer = styled(Container)({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  border: '1px solid',
}) as typeof Container;
