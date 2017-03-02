import { Component, OnInit } from '@angular/core';
import {MasterURLService} from "./services/master-url.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MasterURLService]
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
