import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onClickClientSideTable() {
    this.router.navigate(['table', 'basic-table']);
  }

  onClickServerSideTable() {
    this.router.navigate(['table', 'server-table']);
  }

  onClickClientSideTableDnd() {
    this.router.navigate(['table', 'basic-dnd-table']);
  }
}
