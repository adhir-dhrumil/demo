export class VideoModel {
  videoId: number;
  videoUrl: string;
  videoTitle: string;
  videoDescription: string;
  videoThumbnail: string;
  totalDuration: string;

  constructor () {
    this.videoId = 0;
    this.totalDuration = '';
    this.videoDescription = '';
    this.videoThumbnail = '';
    this.videoTitle = '';
    this.videoUrl ='';
  }
}                                                                      