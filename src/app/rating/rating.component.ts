import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  selectedRating: number | undefined;

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/thank-you', { rating: this.selectedRating }]);
  }

  selectRating(rating: number) {
    this.selectedRating = rating;
  }
}
