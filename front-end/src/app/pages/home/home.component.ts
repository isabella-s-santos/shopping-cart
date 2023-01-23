import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit() {
    this.typewrittingCallback();
  };

  changingWords: string[] = ['e-commerce', 'experience', '& tech'];
  i: number = 0;
  
  text: string = '';
  displayedText: string = '';
  isDeleting: boolean = false;
  fixedTextLength: number = 35;

  typewrittingCallback = (): void => {
    this.text = `console.log('Welcome to your coffee ${this.changingWords[this.i]}')`;

    let textLength = this.text.length;
    let displayedTextCurrentLenght = this.displayedText.length;
    let delta = 100;

    if (this.isDeleting) {
      this.displayedText = this.displayedText.slice(0, -1);
      delta = delta / 2;
    } else {
      if (displayedTextCurrentLenght < textLength) {
        this.displayedText += this.text[displayedTextCurrentLenght];
      } else {
        this.isDeleting = true;

        if (this.i === this.changingWords.length - 1) return;
      };
    };

    if (this.isDeleting && this.displayedText.length === this.fixedTextLength) {
      this.isDeleting = false;

      this.i++;
    };

    setTimeout(this.typewrittingCallback, delta);
  };
};
