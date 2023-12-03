import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { FilterPostsPipe } from './filter-posts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    FilterPostsPipe,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
