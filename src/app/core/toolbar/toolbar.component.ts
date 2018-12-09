import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cdk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() sidenav;
  @Input() sidebar;
  @Input() drawer;
  @Input() matDrawerShow;

  constructor() {
  }

  ngOnInit() {
  }
}
