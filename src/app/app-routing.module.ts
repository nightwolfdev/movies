import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    title: 'About'
  },
  {
    path: 'collection',
    loadChildren: () => import('./collection/collection.module').then(m => m.CollectionModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverModule),
    title: 'Discover'
  },
  {
    path: 'genre',
    loadChildren: () => import('./genre/genre.module').then(m => m.GenreModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    title: 'Movies'
  },
  {
    path: 'keyword',
    loadChildren: () => import('./keyword/keyword.module').then(m => m.KeywordModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: 'now-playing',
    loadChildren: () => import('./featured-list/featured-list.module').then(m => m.FeaturedListModule),
    title: 'Now Playing'
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then(m => m.PersonModule)
  },
  {
    path: 'popular',
    loadChildren: () => import('./featured-list/featured-list.module').then(m => m.FeaturedListModule),
    title: 'Popular'
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
    title: 'Search'
  },
  {
    path: 'trending',
    loadChildren: () => import('./featured-list/featured-list.module').then(m => m.FeaturedListModule),
    title: 'Trending'
  },
  {
    path: 'upcoming',
    loadChildren: () => import('./featured-list/featured-list.module').then(m => m.FeaturedListModule),
    title: 'Upcoming'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '*',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
