import { Component } from '@angular/core';
import { Post } from './interfaces/post.intefrace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  search = '';

  private lastId = 1;

  posts: Post[] = [
    {
      title: 'Вивчаю компоненти',
      text: 'Створюю проект "Блог"',
      date: new Date(),
      id: this.lastId++,
    },
    {
      title: 'Вивчаю директиви',
      text: 'Все ще створюю "Блог"',
      date: new Date(),
      id: this.lastId++,
    },
  ];

  updatePosts(post: Post) {
    const postToAdd = { ...post, id: this.lastId++ };
    console.log('In app component: ', postToAdd);
    this.posts.unshift(postToAdd);
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
