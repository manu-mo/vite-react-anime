import data from './ResApi.json';

type AnimeResApiType = {
    data: {
        _id: string;
        title: string;
        episodes: number;
        image: string;
    };
}

export type AnimeType = {
    id: string;
    title: string;
    alternativeTitles?: string[];
    ranking?: number;
    genres?: string[];
    episodes: number;
    hasEpisode?: boolean;
    hasRanking?: boolean;
    image: string;
    link?: string;
    status?: string;
    synopsis?: string;
    thumb?: string;
    type?: string;
}

export const getAnimeList = () => {
    try {
        const mappedData: AnimeType[] = data.data.map((el) => ({
            id: el._id,
            title: el.title,
            episodes: el.episodes,
            image: el.image,
        }));
        console.log(mappedData);
        
        return mappedData;
    } catch (error) {
        console.error(error);
    }
};