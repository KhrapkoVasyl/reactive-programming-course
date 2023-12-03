import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Post } from '../interfaces/post.intefrace';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnDestroy {
  @Input('toPost') myPost!: Post;
  @Output() onRemove = new EventEmitter<number>();

  removePost() {
    this.onRemove.emit(this.myPost.id);
  }

  ngOnDestroy(): void {
    console.log('метод ngOnDestroy');
  }
}
