import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-natal',
  templateUrl: './natal.component.html',
  styleUrls: ['./natal.component.css']
})
export class NatalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoAnoNovo() {
    this.router.navigate(["anonovo"]);
  }

}
