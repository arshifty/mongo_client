import { User } from "../model/User";


/** return fresh array of test heroes */
export function getTestHeroes(): User[] {
  return [
    {userName: "uuuu",contact: 1554,password:"iiiii",city:"hhhh",country:"nnn",code:"jjj"},
    {userName: "ddd",contact: 4444,password:"ffff",city:"jjjj",country:"vvv",code:"bbb"},
  ];
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/