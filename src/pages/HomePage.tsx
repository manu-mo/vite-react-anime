import React, { useEffect, useState } from "react";
import { AnimeType, getAnimeList } from "../Api";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [anime, setAnime] = useState<AnimeType[]>([]);

  useEffect(() => {
    function fetchData() {
      const response: AnimeType[] | undefined = getAnimeList();
      setAnime(response!);
    }
    fetchData();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Esegui la ricerca nel file JSON
    const results = anime.filter((anime) =>
      anime.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#000" }}>
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <Typography variant="h6" color="inherit" component="div">
            Anime List
          </Typography>
        </Toolbar>
      </AppBar>
      <input type="text" value={searchQuery} onChange={handleSearchChange} />
      {searchResults.map((anime) => (
        <div key={anime.id}>{anime.title}</div>
      ))}
      <Box m={2} py={3}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        >
          {anime.map((el) => (
            <Grid item xs={6} sm={4} md={4} lg={3} key={el.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={el.image}
                  alt={el.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {el.genres?.join(", ")}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link to={el.id} style={{ textDecoration: "none" }}>
                      Vai al dettaglio
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
