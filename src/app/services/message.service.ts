import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private toastr: ToastrService) {}

  successMessage(message: string): void {
    this.toastr.success(message, 'Sucesso!', {
      timeOut: 5000,
    });
  }

  validationMessage(error: string): any {
    return this.toastr.error(error, 'Atenção!', {
      timeOut: 5000,
    });
  }

  errorMessage(error: HttpErrorResponse | any): any {

    if (!(error instanceof HttpErrorResponse) || error.status === 404) {
      return this.toastr.error(error, 'Atenção!', {
        timeOut: 5000,
      });
    }

    if (!(error instanceof HttpErrorResponse) || error.status === 400) {
      return this.toastr.warning(error.error.message, 'Atenção!', {
        timeOut: 5000,
      });
    }

    if (error.error && typeof error.error === 'object') {
      if (error.error.message) {
        return this.toastr.error(error.error.message, 'Atenção!', {
          timeOut: 5000,
        });
      }

      for (let erro in error.error) {
        this.toastr.error(error.error[erro], 'Atenção!', {
          timeOut: 5000,
        });
      }
    }

    if (typeof error === 'string') {
      this.toastr.error(error, 'Atenção!', {
        timeOut: 5000,
      });
    }
  }
}
