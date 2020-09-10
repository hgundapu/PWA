import { Component, ViewChild } from '@angular/core';

import  { PostService } from './services/post.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
export interface TableElement {
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pwa-app';
  Data: TableElement[];
  col: string[] = ['userId', 'title', 'body'];
  dataSource = new MatTableDataSource<TableElement>(this.Data);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private _post: PostService
  ){
    this._post.getPosts().subscribe((res) => {
      this.dataSource = new MatTableDataSource<TableElement>(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })

    let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  alert("install")
});
  }

}
