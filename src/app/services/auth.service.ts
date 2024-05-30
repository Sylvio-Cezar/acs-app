import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject<any>({} as any);
  hasProfileCompleted = new BehaviorSubject<boolean>({} as boolean);
  permissionsData = new BehaviorSubject<Array<string> | undefined>(undefined);
  tantoushaCompany = new BehaviorSubject<number>(0);
  adminProfile = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
  }

  // BehaviorSubject
  setUserData(userData: any): void {
    this.userData.next(userData);
  }

  setProfileCompleted(value: boolean) {
    this.hasProfileCompleted.next(value)
  }

  getProfileCompleted() {
    return this.hasProfileCompleted.getValue();
  }

  getUserData(): any {
    return this.userData.getValue();
  }

  getUserObservable(): Observable<any> {
    return this.userData.asObservable();
  }

  setPermissionsData(permissions: Array<string>) {
    this.permissionsData.next(permissions);
  }

}
