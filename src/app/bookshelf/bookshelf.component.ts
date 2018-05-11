import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  public bookShelf:Array<Book> = [];

  constructor() {

  }

  ngOnInit() {
    //Get all data from file
    //for(var i = 0; i<5;i++){
      //this.bookShelf.push(new Book("MyTitle", "MyAuthor",1234,9));
    //}

    var bookData:Array<Array<string>> = [
      ["Anything You Want", "Derek Sivers", "9781591848264" , "4.03", "anythingyouwant.jpg"],
      ["The Four Hour Work Week", "Tim Ferriss", "9780091929114", "3.83", "fourhourworkweek.jpg"],
      ["Thinking, Fast and Slow", "Daniel Kahneman", "9780374275631", "4.08", "thinkingfastandslow.jpg"],
      ["Elon Musk: Inventing the Future","Ashlee Vance","0062301233","4.24","elonmusk.jpg"],
      ["Surely You're Joking, Mr. Feynman!","Richard Feynman","9780393316049","4.29","surelyyourejokingmrfeynman.jpg"],
      ["Einstein","Walter Isaacson","9780061893896","4.18","einstein.jpg"],
      ["David and Goliath","Malcolm Gladwell","9780316204361","3.90","davidandgoliath.jpg"]
    ];

    for(var i = 0; i < bookData.length;i++){
      this.bookShelf.push(new Book(bookData[i][0],bookData[i][1],parseFloat(bookData[i][2]),parseFloat(bookData[i][3]),bookData[i][4]));
    }

    this.bookShelf.sort(function(a,b){
      return b.getRating()-a.getRating();
    });

  }

}


export class Book{
  private title:string;
  private author:string;
  private ISBN:number;
  private rating:number;
  private pictureName:string;

  constructor(title:string, author:string, ISBN:number, rating:number, pictureName:string){
    this.setTitle(title);
    this.setAuthor(author);
    this.setISBN(ISBN);
    this.setRating(rating);
    this.setPictureName(pictureName);
  }


  private setTitle(title:string){
    this.title = title;
  }

  private setAuthor(author:string){
    this.author = author;
  }

  private setISBN(ISBN:number){
    //if (//inneholder gitt antall siffer som trengs){
        this.ISBN = ISBN;
    //}

  }

  private setRating(rating:number){
    if (rating <=10 && rating >=0){
      this.rating = rating;
    }
    //else{
      //throw new IllegalArgumentException("A rating has to be a number from 0 to 10");
    //}
  }

  public getRating(){
    return this.rating;
  }


  private setPictureName(pictureName:string){
    this.pictureName = "assets/bookpictures/" + pictureName;
  }


}
