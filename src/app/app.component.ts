import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  test = 'orange';
  @ViewChild('myBall') content: ElementRef;

  constructor() { }

  ngOnInit() {
    this.content.nativeElement.setAttribute('color', 'pink');
    this.content.nativeElement.setAttribute('radius', '0.5');
  }

  hallo() {
    console.log('hit');
  }
}
