import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { SearchObject } from 'src/app/model/SearchObject';
import { GoogleSearchService } from 'src/app/service/google-search.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  selectLocation(arg0: string) {
    this.input=arg0
    this.sugestions.predictions=[]
  
}
  sugestions!: Google;
  input!:string;
 


constructor(private router:Router, private searchService:SearchService,private googleSearch:GoogleSearchService){
}


  googleautocomplete(){
    this.googleSearch.findLocation(this.input).subscribe(res=>{
      this.sugestions=res;
      console.log(this.sugestions);
      
    });
  }
checkedbutton=true;
searchObject!:SearchObject;
  ngOnInit(): void {
    this.searchObject= this.searchService.getSearchObject();
    console.log(this.searchObject.pickUpDate);
  }



search() {
  this.searchService.setSearchObject(this.searchObject)
  this.gotoSearchResults()
}

buttonChecked() {
this.checkedbutton=!this.checkedbutton;
}

gotoSearchResults(){
  this.router.navigate(['/searchresult']);
}

}



export interface Google {
  predictions: Prediction[]
  status: string
}

export interface Prediction {
  description: string
  matched_substrings: MatchedSubstring[]
  place_id: string
  reference: string
  structured_formatting: StructuredFormatting
  terms: Term[]
  types: string[]
}
export interface MatchedSubstring {
  length: number
  offset: number
}

export interface StructuredFormatting {
  main_text: string
  main_text_matched_substrings: MainTextMatchedSubstring[]
  secondary_text: string
}

export interface MainTextMatchedSubstring {
  length: number
  offset: number
}

export interface Term {
  offset: number
  value: string
}