import { Component, OnInit } from '@angular/core';
import { faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterIcon = faSortAmountDownAlt;
  constructor() { }

  ngOnInit() {
  }

}
