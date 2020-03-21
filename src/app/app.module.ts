import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstLetterUpperPipe } from './pipes/first-letter-upper.pipe';
import { MeanPipe } from './pipes/mean.pipe';
import { TransformRouteKindKeyPipe } from './pipes/transform-route-kind-key.pipe';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstLetterUpperPipe,
    MeanPipe,
    TransformRouteKindKeyPipe,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
