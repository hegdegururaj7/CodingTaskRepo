export interface MovieResponse {
    id: number;
    language: string;

    location: string;

    plot: string;

    poster: string;
    soundEffects: string[];
    stills: string[];

    title: string;

    imdbId: string;

    listingType: string;

    imbRating: string;
}