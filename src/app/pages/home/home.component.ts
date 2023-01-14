import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit() {
    this.typewrittingCallback();
  };

  typewrittingText: string = 'Welcome to your coffee e-commerce.';
  typewrittingDisplayedText: string = "";

  typewrittingCallback = (): void => {
    let totalLenght = this.typewrittingText.length;
    let currentLenght = this.typewrittingDisplayedText.length;

    if (currentLenght < totalLenght) {
      this.typewrittingDisplayedText += this.typewrittingText[currentLenght];

      setTimeout(
        this.typewrittingCallback, 100
      );
    };
  };

  // typewrittingLines: string[] = ['Welcome to your', 'coffe e-commerce.']
  // typewrittingLinesDisplay: string[] = ['', ''];

  // ngOnInit() {
  //   for (let i = 0; i < this.typewrittingLines.length; i++) {
  //     this.typewrittingLinesDisplay[i] = this.typewrittingCallback(
  //       this.typewrittingLines[i], this.typewrittingLinesDisplay[i]
  //     );
  //   };    
  // };

  // typewrittingCallback(typewrittingLine: string, typewrittingLineDisplay: string): string {
  //   let lineLength = typewrittingLine.length; 
  //   let currentLineLength = typewrittingLineDisplay.length;

  //   if (currentLineLength < lineLength) {
  //     typewrittingLineDisplay += typewrittingLine[currentLineLength];

  //     setTimeout(
  //       this.typewrittingCallback, 100, typewrittingLine, typewrittingLineDisplay
  //     );
  //   };

  //   return typewrittingLineDisplay;
  // };
};
