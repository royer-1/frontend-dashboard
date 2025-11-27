import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

import { Contract } from '@/pages/service/contracts.service';

@Component({
  selector: 'app-detailsschedule',
  imports: [FormsModule, CommonModule, InputTextModule, DataViewModule, TagModule, ButtonModule, DialogModule],
  templateUrl: './detailsschedule.html',
  styleUrl: './detailsschedule.scss'
})
export class Detailsschedule {

  @Input() contract: any;

// @Input() contract!: Contract;
  selectedSchedule: any; 

  date: Date[] | undefined;

  editSchedule() {

  }

}
