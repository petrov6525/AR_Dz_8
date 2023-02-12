import { Component } from '@angular/core';
import { Picture } from 'src/app/models/picture';
import { PictureListService } from 'src/app/services/picture-list.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[PictureListService]
})
export class GalleryComponent {
  pictures:Picture[]=[];
  selectedItem:Picture=this.pictures[0];


  ImgClick(picture:Picture){
    this.selectedItem=picture;
  }


  constructor(private pictureListService:PictureListService){
    
  }

  ngOnInit(){
    this.pictures=this.pictureListService.GetData();
    this.selectedItem=this.pictures[0];
  }
}
