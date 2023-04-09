//template  https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/DateTimeScaleLightweight/Angular/Light/
//install these packages
//npx -p devextreme-cli devextreme add devextreme-angular
import { Component ,enableProdMode,ViewChild } from '@angular/core';
import { Employee, Service } from './app.service';
import {
  DxDrawerComponent, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule,
} from 'devextreme-angular';
import { List } from './app.service2';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
})
export class AppComponent {
  //navbar
  @ViewChild(DxDrawerComponent, { static: false })
  drawer!: DxDrawerComponent;

  navigation: List[];

  showSubmenuModes: string[] = ['slide', 'expand'];

  positionModes: string[] = ['left', 'right'];

  showModes: string[] = ['push', 'shrink', 'overlap'];

  text: string;

  selectedOpenMode = 'shrink';

  selectedPosition = 'left';

  selectedRevealMode = 'slide';

  isDrawerOpen = true;

  elementAttr: any;

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
    },
  }];
  //filter
  title = 'filter';
  startValue: Date = new Date(2021, 12, 31);

  endValue: Date = new Date();

  selectedStartValue: Date = new Date(2021, 12, 31);

  selectedEndValue: Date = new Date(2022, 2, 1);

  employees: Employee[];

  selectedEmployees: Employee[];

  tableTitles: string[] = ['First Name', 'Last Name', 'Birth Year', 'City', 'Title'];


  constructor(service: Service) {
    this.employees = service.getEmployees();
    this.selectedEmployees = this.employees;

    this.text = service.getContent();
    this.navigation = service.getNavigationList();
  }

  onValueChanged(e: { value: Date[]; }) {
    const selectedEmployees: any[] = [];

    this.employees.forEach((item, index) => {
      if (item.BirthYear >= e.value[0] && item.BirthYear <= e.value[1]) {
        selectedEmployees.push(item);
      }
    });

    this.selectedEmployees = selectedEmployees;
  }
}
