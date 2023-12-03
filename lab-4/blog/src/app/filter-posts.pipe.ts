import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './interfaces/post.intefrace';

@Pipe({
  name: 'filterPosts',
  pure: false,
})
export class FilterPostsPipe implements PipeTransform {
  transform(posts: Post[], search: string = ''): Post[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
  }
}
