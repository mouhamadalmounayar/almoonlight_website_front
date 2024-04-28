import { Component } from '@angular/core';
import {ContentfulService} from "../../services/contentful.service";
import {BlogModel} from "../../models/blog.model";
import {NgIf} from "@angular/common";
import {MarkedToHtmlPipe} from "../../pipes/marked-to-html.pipe";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    NgIf,
    MarkedToHtmlPipe
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blog : BlogModel
  private blogId : string = "6l06wXummska6MlDuLTux7"
  constructor(private _contentfulService : ContentfulService){}
  getEntry(id) : void {
    this._contentfulService.getEntry(id).subscribe((blog) =>{
      this.blog = blog
    })
  }
  ngOnInit() : void {
    this.getEntry(this.blogId)
  }
}
