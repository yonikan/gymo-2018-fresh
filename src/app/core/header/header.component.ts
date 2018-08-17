import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen2: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown2() {
    this.isOpen2 = !this.isOpen2;
  }

  onClickOutside2() {
    this.isOpen2 = false;
  }
}
