import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {SocialApiService} from "./social.api.service";
import {Observable} from "rxjs";
import {Promise} from "axios";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @Input() public someWord:string =' ';
  public somenumber: string ='0';
  constructor(public socialApiService: SocialApiService) { }

  public isWordGood(word: string): Promise<string>{
   return this.socialApiService.isWordBadback(word).then(response => this.somenumber = response );
  }
  public changeWord() {
    this.isWordGood(this.someWord);
    if(this.somenumber==="1"){
      console.log("you nautty!!");
      this.someWord = '';
    }
  }

  title = 'app works!';


}
