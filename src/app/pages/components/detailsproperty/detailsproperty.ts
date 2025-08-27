import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { Property } from '@/pages/service/property.service';
import { Editproperty } from '../editproperty/editproperty';


@Component({
  selector: 'app-detailsproperty',
  imports: [CommonModule, DataViewModule, TagModule, ButtonModule, DialogModule, Editproperty],
  templateUrl: './detailsproperty.html',
  styleUrl: './detailsproperty.scss',
  providers: []
})
export class Detailsproperty {

    visibleEdit: boolean = false;

    selectedProperty: any = null;

    @Input() property: any;


    editProperty(property: any){
        this.selectedProperty = property;
        this.visibleEdit = true;
    }

}
