import React, { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, Typography, CircularProgress, CardHeader, IconButton } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom';
import { AnimeDetailType, getAnimeDetail } from '../Api';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const DetailPage = () => {

  const { animeId } = useParams();
  const [animeDetail, setAnimeDetail] = useState<AnimeDetailType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (animeId) {
      const anime: AnimeDetailType = getAnimeDetail(animeId)!;
      console.log('ANIME ', anime);
      setAnimeDetail(anime);
    }
  }, [animeId]);


  return animeDetail ? (
    <>
      <Card sx={{ maxWidth: 500, alignItems: 'center', margin: 1, }} style={{ marginTop: '1em', marginBottom: '1em' }}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={() => navigate(-1)}>
              <ArrowBackIosRoundedIcon />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          sx={{ width: '100%', height: 'auto' }}
          image={animeDetail.image}
          alt={animeDetail.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {animeDetail.episodes} - {animeDetail.status}
          </Typography>
          <hr />
          <Typography gutterBottom variant="h4" component="div" sx={{ marginTop: 1 }}>
            {animeDetail.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
            {animeDetail.synopsis}
          </Typography>
          <hr />
          <Typography variant="body2" color="text.primary" sx={{ marginTop: 1 }}>
            Genres: {animeDetail.genres?.join(', ')} <br /> Rating: {animeDetail.ranking}/10
          </Typography>
        </CardContent>

      </Card>
    </>
  ) : (
    <CircularProgress />
  );
}

export default DetailPage