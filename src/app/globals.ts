import { Injectable } from "@angular/core";


@Injectable()
export class MyGlobals{
    // static serverAddress = `https://socket-io-use.herokuapp.com/`;
    static serverAddress = `http://192.168.0.73:8080/`;
    // static serverAddress = `https://obscure-ridge-49316.herokuapp.com/`;

    static googleApiKey = 'AIzaSyCuxTc1zAmpV2lxGKQkHud1TzrcXyzWasY';
}



export function ProperCase(str){
    return str.split(' ')
   .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
   .join(' ')
}