import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { VideoModel } from '../../model/video';

@Component({
  selector: 'app-videos',
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {
  videoList: VideoModel [] =[];
  videosrv = inject(VideoService);

  ngOnInit(): void {
    debugger;
      this.getVideos();
  }

  getVideos() {
    debugger;
    this.videosrv.getVideos().subscribe((result:any)=>{
      debugger; 
        this.videoList = result.data
    })
  }
}
