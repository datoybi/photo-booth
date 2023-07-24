import { useEffect, useState } from 'react';
import axios from 'axios';
import normalize from 'emotion-normalize';
import { css, Global } from '@emotion/react';
import { Routes } from './Routes';
import { PageLayout } from '../PageLayout';
import { API_SECRET_KEY } from '../../constants/constant';

export default function App() {
  const [imageData, setImageData] = useState([]);

  // TODO: 임시로 여기서 fetch하는데 나중에 리펙토링하기
  useEffect(() => {
    const fetchTodo = async () => {
      const data = await axios
        .get('http://api.unsplash.com/photos/random', {
          params: { client_id: API_SECRET_KEY, count: 10 },
          // params: { client_id: import.meta.env.VITE_UNSPLASH_ID, count: 10 },
        })
        .then(res => res.data);
      console.log(data);
      setImageData(data);
    };

    fetchTodo();
  }, []);

  return (
    <>
      <Global
        styles={css`
          ${normalize}
          h1, h2, h3, h4, h5, h6 {
            font-size: 1em;
            font-weight: normal;
            margin: 0;
          }
        `}
      />
      <PageLayout>
        <Routes imageData={imageData} />
      </PageLayout>
    </>
  );
}
