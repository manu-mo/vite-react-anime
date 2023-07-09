import React, { useEffect, useState } from 'react'
import { AnimeType, getAnimeList } from '../Api';
import { Card, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const [anime, setAnime] = useState<AnimeType[]>([]);

  useEffect(() => {
    function fetchData() {
      const response: AnimeType[] | undefined = getAnimeList();
      setAnime(response!);
    }
    fetchData();
  }, []);

  return <>
    {anime.map((el) => (
      <Link to={el.id} key={el.id} style={{ textDecoration: 'none', margin: '2em' }}>
        <Card sx={{ display: 'flex', alignItems: 'center' }} className='image-container'>
          <CardMedia component='img' sx={{ height: 350, width: 275 }} image={el.image} alt={el.title} />
          <Typography>{el.title}</Typography>
        </Card>
      </Link>
    ))}
  </>
}

export default HomePage