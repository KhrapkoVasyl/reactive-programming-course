import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../interfaces/post.intefrace';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  title = '';
  text = '';

  myDate$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  currentDate!: Date;

  ngOnInit(): void {
    this.myDate$.subscribe((date) => {
      this.currentDate = date;
    });
  }

  addPost() {
    const trimmedTitle = this.title.trim();
    const trimmedText = this.text.trim();

    if (trimmedTitle && trimmedText) {
      const post: Post = {
        title: trimmedTitle,
        text: trimmedText,
        date: this.currentDate,
      };
      this.onAdd.emit(post);
      console.log('New post', post);
      this.title = '';
      this.text = '';
    }
  }
}
