import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-authors-header',
  templateUrl: './authors-header.component.html',
  styleUrls: ['./authors-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsHeaderComponent {
  @Input() authorsLength = 0;
  @Input() isLoading = false;

  @Output() refreshAuthors = new EventEmitter<void>();
}
