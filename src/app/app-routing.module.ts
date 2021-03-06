import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CallbackComponent} from "./callback/callback.component";
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {PlaylistsComponent} from "./playlists/playlists.component";
import {ProfileComponent} from "./profile/profile.component";
import {MainComponent} from "./main/main.component";
import {YourMusicComponent} from "./your-music/your-music.component";
import {SongsComponent} from "./songs/songs.component";
import {AlbumsComponent} from "./albums/albums.component";
import {ArtistsComponent} from "./artists/artists.component";
import {PlaylistComponent} from "./playlist/playlist.component";
import {AlbumComponent} from "./album/album.component";
import {BrowseComponent} from "./browse/browse.component";
import {FeaturedComponent} from "./featured/featured.component";
import {GenreMoodsComponent} from "./genre-moods/genre-moods.component";
import {NewReleasesComponent} from "./new-releases/new-releases.component";
import {AuthGuard} from "./shared/auth/auth.guard";
import {CategoryComponent} from "./category/category.component";
import {ArtistComponent} from "./artist/artist.component";
import {OverviewComponent} from "./overview/overview.component";
import {RelatedArtistsComponent} from "./related-artists/related-artists.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'callback',
    component: CallbackComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'your-music', pathMatch: 'full' },
      {
        path: 'search',
        component: SearchComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'playlist',
        component: PlaylistComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'album',
        component: AlbumComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'category',
        component: CategoryComponent,
        canActivate: [AuthGuard]

      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'artist',
        component: ArtistComponent,
        children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          {
            path: 'overview',
            component: OverviewComponent
          },
          {
            path: 'related-artists',
            component: RelatedArtistsComponent
          },
        ],
        canActivate: [AuthGuard]
      },
      {
        path: 'your-music',
        component: YourMusicComponent,
        children: [
          { path: '', redirectTo: 'playlists', pathMatch: 'full' },
          {
            path: 'playlists',
            component: PlaylistsComponent
          },
          {
            path: 'songs',
            component: SongsComponent
          }
          ,
          {
            path: 'albums',
            component: AlbumsComponent
          },
          {
            path: 'artists',
            component: ArtistsComponent
          }
        ],
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'browse',
        component: BrowseComponent,
        children: [
          { path: '', redirectTo: 'featured', pathMatch: 'full' },
          {
            path: 'featured',
            component: FeaturedComponent
          },
          {
            path: 'genre-moods',
            component: GenreMoodsComponent
          }
          ,
          {
            path: 'new-releases',
            component: NewReleasesComponent
          }
        ],
        canActivate: [AuthGuard]
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
