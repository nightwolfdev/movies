# Movies

![Movies App](./src/assets/img/movies-app.png)

View Now Playing, Popular, Trending, and Upcoming Movies. Discover movies by genre, rating, watch provider, and year. View more details about each movie.

## Getting Started

1. Clone the repo  
  `git clone https://github.com/nightwolfdev/movies.git`
2. Navigate to the project folder  
  `cd movies`
3. Install dependencies  
  `npm install`
4. Run the app  
  `ng serve`
5. Visit the app in a browser  
  `http://localhost:4200`

## API Key

In order to make a valid API request, an API key is required. [Learn more](https://www.themoviedb.org/documentation/api)

Once you have acquired an API key, create a file called `api.ts` in the `environments` folder with the following, replacing YOUR_API_KEY with your actual key:

```
const host = 'https://api.themoviedb.org/3';
const key = 'YOUR_API_KEY';

export {
  host,
  key
}
```

## Links

* [Demo](https://nightwolfdev.github.io/movies/)
* [Angular](https://angular.io)
* [Clarity Design System](https://clarity.design/)
* [RxJS](https://rxjs.dev)
* [TypeScript](https://www.typescriptlang.org)
* [TMDB API](https://www.themoviedb.org/)