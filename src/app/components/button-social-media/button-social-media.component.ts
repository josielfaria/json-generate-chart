import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-social-media',
  templateUrl: './button-social-media.component.html',
  styleUrls: ['./button-social-media.component.scss']
})
export class ButtonSocialMediaComponent implements OnInit {

  @Input() socialMedia: any;

  constructor() { }

  ngOnInit(): void {
  }

}
