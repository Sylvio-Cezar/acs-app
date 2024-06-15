import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MessageService } from '../../../../services/message.service';

@Component({
  selector: 'app-multi-images',
  templateUrl: './multi-images.component.html',
  styleUrls: ['./multi-images.component.css']
})
export class MultiImagesComponent implements OnInit {

  @ViewChild('dropzone', { static: false }) dropzone!: ElementRef;

  @Input() filesTitle: string = '';
  @Output() onFilesChange = new EventEmitter<string[]>();
  @Input() selectedFiles: string[] = [];

  fileNames: string[] = [];
  changeEvent: any = '';

  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
    this.changeEvent = event;

    if (event.target) {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files) {
        const files = Array.from(inputElement.files);
        const allowedTypes = ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/csv', 'application/msword', 'text/html', 'text/plain' ,'image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
        files.forEach(file => {
          if (file.size <= 5242880 && allowedTypes.includes(file.type)) {
            this.displayPreview(file);
          } else {
            if (file.size > 5242880) {
              this.messageService.errorMessage("Tamanho do arquivo excede o limite de 5MB");
            }
            if (!allowedTypes.includes(file.type)) {
              this.messageService.errorMessage("Tipo de arquivo inválido. Por favor envie um arquivo PNG, JPEG ou JPG");
            }
          }
        });
      }
    }
  }

  ngAfterViewInit(): void {
    this.setInputDragAndDrop();
  }

  setInputDragAndDrop() {
    this.dropzone.nativeElement.addEventListener('dragover', (e: Event) => {
      e.preventDefault();
      this.dropzone.nativeElement.classList.add('border-blue-600');
    });

    this.dropzone.nativeElement.addEventListener('dragleave', (e: Event) => {
      e.preventDefault();
      this.dropzone.nativeElement.classList.remove('border-blue-600');
    });

    this.dropzone.nativeElement.addEventListener('drop', (e: DragEvent) => {
      e.preventDefault();
      this.dropzone.nativeElement.classList.remove('border-blue-600');
      if (e.dataTransfer) {
        const file = e.dataTransfer.files[0];
        this.fileChangeEvent({ target: { files: [file] } });
      }
    });
  }

  displayPreview(file: File): void {
    this.fileNames.push(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedFiles.push(reader.result as string);
      this.onFilesChange.emit(this.selectedFiles);
    };
    reader.onerror = (error) => {
      this.messageService.errorMessage(error);
    };
    reader.readAsDataURL(file);
  }

  deleteSelected(index: number) {
    this.selectedFiles.splice(index, 1);
    this.onFilesChange.emit(this.selectedFiles);
    const fileInput = this.dropzone.nativeElement.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = '';
    }
  }

  openPDF(file: string) {
    let base64String = file;

    let base64Data = base64String.split(';base64,').pop();

    let binaryString = window.atob(base64Data as string);
    let binaryLen = binaryString.length;
    let bytes = new Uint8Array(binaryLen);

    for (let i = 0; i < binaryLen; i++) {
       let ascii = binaryString.charCodeAt(i);
       bytes[i] = ascii;
    }

    let blob = new Blob([bytes], {type: "application/pdf"});
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.target = "_blank";
    link.click();
  }

}
