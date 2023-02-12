import { Picture } from "../models/picture";

export class PictureListService{
    private data:Picture[]=[];

    GetData():Picture[]{
        return this.data;
    }

    AddData(data:Picture){
        this.data.push(data);
    }

    StartInit(){
        let picture=new Picture();
        picture.author = "Author 1";
        picture.name = "Picture 1";
        picture.place = "Place 1";
        picture.size = "100x100";
        picture.year = 2001;
        picture.path="/assets/img/img1.jpg"
        this.AddData(picture);

        picture=new Picture();
        picture.author = "Author 2";
        picture.name = "Picture 2";
        picture.place = "Place 2";
        picture.size = "200x200";
        picture.year = 2002;
        picture.path="/assets/img/img2.jpg"
        this.AddData(picture);

        picture=new Picture();
        picture.author = "Author 3";
        picture.name = "Picture 3";
        picture.place = "Place 3";
        picture.size = "300x300";
        picture.year = 2003;
        picture.path="/assets/img/img3.jpg"
        this.AddData(picture);

        picture=new Picture();
        picture.author = "Author 4";
        picture.name = "Picture 4";
        picture.place = "Place 4";
        picture.size = "400x400";
        picture.year = 2004;
        picture.path="/assets/img/img4.webp"
        this.AddData(picture);

        picture=new Picture();
        picture.author = "Author 5";
        picture.name = "Picture 5";
        picture.place = "Place 5";
        picture.size = "500x500";
        picture.year = 2005;
        picture.path="/assets/img/img5.jpg"
        this.AddData(picture);
    }

    constructor(){
        this.StartInit();
    };
    
}