import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-csv-file-input',
  templateUrl: './csv-file-input.component.html',
  styleUrls: ['./csv-file-input.component.css']
})
export class CsvFileInputComponent {
  @Output() onLoad = new EventEmitter();

  onFileSelect(input: HTMLInputElement) {
    const files = input.files;

    if (files && files.length) {
      const fileToRead = files[0];
      const fileReader = new FileReader();
      fileReader.onload = (fileLoadedEvent) => {
        const textFromFileLoaded = new String(fileLoadedEvent.target.result);
        let csvLines = textFromFileLoaded.split("\n");
        let csv = csvLines.map(csvLine => csvLine.split(","));
        this.onLoad.emit(csv);
      };
      fileReader.readAsText(fileToRead, "UTF-8");
    }
  }
}
