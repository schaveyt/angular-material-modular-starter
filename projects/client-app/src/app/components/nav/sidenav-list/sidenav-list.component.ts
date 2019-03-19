import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  onClickClientSideTable() {
    this.router.navigate(['table', 'basic-table']);
    this.onSidenavClose();
  }

  onClickServerSideTable() {
    this.router.navigate(['table', 'server-table']);
    this.onSidenavClose();
  }

  onClickClientSideTableDnd() {
    this.router.navigate(['table', 'basic-dnd-table']);
    this.onSidenavClose();
  }

}
