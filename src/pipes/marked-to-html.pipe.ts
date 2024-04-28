import { Pipe, PipeTransform } from '@angular/core';
import {ContentfulService} from "../services/contentful.service";

@Pipe({
  name: 'markedToHtml',
  standalone: true
})
export class MarkedToHtmlPipe implements PipeTransform {
  constructor(private _contentfulService:ContentfulService){}
  transform(value: string): unknown {
    return this._contentfulService.mark(value)
  }

}
