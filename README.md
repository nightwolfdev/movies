# Movies

![Movies App](./src/assets/img/movies-app.png)

Movies app using Angular, RxJS, TypeScript, and the TMDB API.

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

* [Demo](https://nightwolf.dev/demos/movies)
* [Angular](https://angular.io)
* [RxJS](https://rxjs.dev)
* [TypeScript](https://www.typescriptlang.org)
* [TMDB API](https://www.themoviedb.org/)