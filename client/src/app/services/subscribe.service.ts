import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApiService} from './api.service'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  private apiUrl = environment.apiUrl;
  // replace with your API endpoint URL

  isSub = false;
  isShowSub = false;

  constructor(private apiService: ApiService) { }

  subscribe(fullName: string, email: string, favoriteCategory: string){
    if (fullName.length > 0 && email.length > 0 && favoriteCategory.length > 0) {
      const body = {fullName, email, favoriteCategory};
      this.apiService.postTypeRequest('subscribe', body).subscribe();
    }
  }

}
