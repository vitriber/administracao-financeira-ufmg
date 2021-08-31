import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formula1',
  templateUrl: './formula1.component.html',
  styleUrls: ['./formula1.component.css']
})
export class Formula1Component {
  @Output() onLoad = new EventEmitter();
  csvContent: string;

  onFileLoad(fileLoadedEvent) {
    const textFromFileLoaded = fileLoadedEvent.target.result;
    this.csvContent = textFromFileLoaded;
    let csvLines = this.csvContent.split("\n");
    let csv = csvLines.map(csvLine => csvLine.split(","));
    this.onLoad.emit(csv);
  }

  onFileSelect(input: HTMLInputElement) {
    const files = input.files;

    if (files && files.length) {
      const fileToRead = files[0];
      const fileReader = new FileReader();
      fileReader.onload = this.onFileLoad;
      fileReader.readAsText(fileToRead, "UTF-8");
    }
  }
}
