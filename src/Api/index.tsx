import data from './ResApi.json';

type AnimeResApiType = {
    data: {
        _id: string;
        title: string;
        episodes?: number;
        image?: string;
    };
}

export type AnimeType = {
    id: string;
    title: string;
    // alternativeTitles?: string[];
    // ranking?: number;
    genres?: string[];
    // episodes?: number;
    // hasEpisode?: boolean;
    // hasRanking?: boolean;
    image?: string;
    // link?: string;
    // status?: string;
    // synopsis?: string;
    // thumb?: string;
    // type?: string;
}

export const getAnimeList = () => {
    try {
        const mappedData: AnimeType[] = data.data.map((el) => ({
            id: el._id,
            title: el.title,
            genres: el.genres,
            image: el.image,
        }));
        return mappedData;
    } catch (error) {
        console.error(error);
    }
};

export type AnimeDetailType = {
    id?: string;
    title?: string;
    alternativeTitles?: string[];
    ranking?: number;
    genres?: string[];
    episodes?: number;
    hasEpisode?: boolean;
    hasRanking?: boolean;
    image?: string;
    link?: string;
    status?: string;
    synopsis?: string;
    thumb?: string;
    type?: string;
};

export const getAnimeDetail = (id: string) => {
    if (Number(id) < 0) {
        console.log('id error')
        return null;
    } else {
        try {
            for (const item of data.data) {
                if (item._id == id) {
                    const mappedData: AnimeDetailType = {
                        id: item._id,
                        title: item.title,
                        episodes: item.episodes,
                        image: item.image,
                        status: item.status,
                        synopsis: item.synopsis,
                        ranking: item.ranking,
                        genres: item.genres,
                    };
                    return mappedData;
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
};