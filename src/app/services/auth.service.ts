import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject<any>({} as any);
  hasProfileCompleted = new BehaviorSubject<boolean>({} as boolean);
  permissionsData = new BehaviorSubject<Array<string> | undefined>(undefined);
  tantoushaCompany = new BehaviorSubject<number>(0);
  adminProfile = new BehaviorSubject<number>(0);
  private storage: Storage

  constructor(
    private http: HttpClient,
  ) {
    this.storage = window.localStorage;
  }

  // BehaviorSubject
  setUserData(userData: any): void {
    // this.userData.next(userData);
    this.storage.setItem('user', JSON.stringify(userData));
  }

  setProfileCompleted(value: boolean) {
    this.hasProfileCompleted.next(value)
  }

  getProfileCompleted() {
    return this.hasProfileCompleted.getValue();
  }

  getUserData(): any {
    // return this.userData.getValue();
    return JSON.parse(this.storage.getItem('user') as string);
  }

  getUserObservable(): Observable<any> {
    return this.userData.asObservable();
  }

  setPermissionsData(permissions: Array<string>) {
    this.permissionsData.next(permissions);
  }

}
