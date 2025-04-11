import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  apiUrl: string ="https://projectapi.gerasim.in/api/OnlineLearning/"

  constructor(private http:HttpClient) {}
  getVideos() {
    debugger;
    return this.http.get(this.apiUrl+"GetAllVideos")
  }
   
}
