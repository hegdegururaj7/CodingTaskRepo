export class Movie {
    constructor(
        public Id: number,
        public language: string,

        public location: string,

        public plot: string,

        public poster: string,
        public soundEffects: string[],
        public stills: string[],

        public title: string,

        public imdbId: string,

        public listingType: string,

        public imbRating: string,
    ) { }
}