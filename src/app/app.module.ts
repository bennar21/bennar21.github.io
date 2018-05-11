import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterinfoComponent } from './footerinfo/footerinfo.component';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { NowComponent } from './now/now.component';

const appRoutes: Routes = [
  { path: '', component: PostsComponent},
  { path: 'posts', component: PostsComponent },
  { path: 'knowledge-base',      component: KnowledgeBaseComponent },
  { path: 'bookshelf', component: BookshelfComponent},
  { path: 'now', component: NowComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterinfoComponent,
    PostsComponent,
    PageNotFoundComponent,
    KnowledgeBaseComponent,
    SidebarComponent,
    BookshelfComponent,
    NowComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
