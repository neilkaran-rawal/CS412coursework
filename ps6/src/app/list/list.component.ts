import { Component, OnInit } from '@angular/core';
import {STATS} from '../data/weatherMOCK';
import {WEATHER} from '../data/weather';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  stat: WEATHER[] = STATS;
  selectedStat: WEATHER;

  constructor() { }

  ngOnInit(): void {
  }

}
