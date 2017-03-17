/**
 * Created by Nikita on 17/03/2017.
 */
/**
 * Created by ilya on 03/02/2017.
 */
import { Injectable } from '@angular/core';
import axios from 'axios';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/trow';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SocialApiService {

  public isWordBadback(word: string):Promise<string>   {
    let valid;
    let isvalid;
    let value;
    isvalid = axios.post('/isgoodword', {
      text: word
    },)
      .then(function (response) {
        valid = response["data"]["rsp"]["found"] === "1"
        return new Promise<string>((resolve, reject) => {
          value = response["data"]["rsp"]["found"]
          resolve(value);
          return value;
        });
      })
      .catch(function (error) {
        console.log('error is '+error);
        valid = false;
        return new Promise<string>((resolve, reject) => {
          reject("0");
        });
      });
    return isvalid;
  }

}
