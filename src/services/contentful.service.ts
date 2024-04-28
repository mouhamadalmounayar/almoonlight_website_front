import { Injectable } from '@angular/core';
import * as contentful from 'contentful'
import {environment} from "../environments/environment";
import {from, map, Observable, of} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {BlogModel} from "../models/blog.model";
import {marked} from "marked";
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space : environment.contentful.spaceId,
    accessToken : environment.contentful.apiKey
  })
  constructor() { }
  getEntry(id:string):Observable<any> {
    const promise = this.client.getEntry(id)
    return from(promise).pipe(map(entry => entry.fields))
  }

  mark(md : string){
    return marked(md)
  }
}
