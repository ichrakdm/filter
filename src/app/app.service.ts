import { Injectable } from '@angular/core';
export class List {
  id!: number;

  text!: string;

  icon!: string;
}
export class Employee {
  LastName: string | undefined;

  FirstName: string | undefined;

  BirthYear!: Date;

  City: string | undefined;

  Title: string | undefined;
}

const employees: Employee[] = [
  {
    LastName: 'Davolio', FirstName: 'Nancy', BirthYear:new Date(2022,2,16), City: 'Seattle', Title: 'Sales Representative',
  },
  {
    LastName: 'Fuller', FirstName: 'Andrew', BirthYear:new Date(2022,4,5), City: 'Tacoma', Title: 'Vice President, Sales',
  },
  {
    LastName: 'Leverling', FirstName: 'Janet', BirthYear:new Date(2022,4,20), City: 'Kirkland', Title: 'Sales Representative',
  },
  {
    LastName: 'Peacock', FirstName: 'Margaret', BirthYear:new Date(2023,2,19), City: 'Redmond', Title: 'Sales Representative',
  },
  {
    LastName: 'Buchanan', FirstName: 'Steven', BirthYear:new Date(2023,4,15), City: 'London', Title: 'Sales Manager',
  },
  {
    LastName: 'Suyama', FirstName: 'Michael', BirthYear:new Date(2022,12,9), City: 'London', Title: 'Sales Representative',
  },
  {
    LastName: 'King', FirstName: 'Robert', BirthYear:new Date(2022,7,25), City: 'London', Title: 'Sales Representative',
  },
  {
    LastName: 'Callahan', FirstName: 'Laura', BirthYear:new Date(2023,4,6), City: 'Seattle', Title: 'Inside Sales Coordinator',
  },
  {
    LastName: 'Dodsworth', FirstName: 'Anne', BirthYear:new Date(2022,3,10), City: 'London', Title: 'Sales Representative',
  },
];
const navigation: List[] = [
  { id: 1, text: 'Products', icon: 'product' },
  { id: 2, text: 'Sales', icon: 'money' },
  { id: 3, text: 'Customers', icon: 'group' },
  { id: 4, text: 'Employees', icon: 'card' },
  { id: 5, text: 'Reports', icon: 'chart' },
];
const text = `
<h2>
    <b>Drawer Demo</b>
</h2>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Penatibus et magnis dis parturient. Eget dolor morbi non arcu risus. Tristique magna sit amet purus gravida quis blandit. Auctor urna nunc id cursus metus aliquam eleifend mi in. Tellus orci ac auctor augue mauris augue neque gravida. Nullam vehicula ipsum a arcu. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Cursus in hac habitasse platea dictumst. Egestas dui id ornare arcu. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p><p>Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Neque volutpat ac tincidunt vitae semper quis lectus. Sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Amet cursus sit amet dictum sit amet justo donec enim. Vestibulum rhoncus est pellentesque elit ullamcorper. Id aliquet risus feugiat in ante metus dictum at.
</p>
`;
@Injectable()
export class Service {
  getEmployees(): Employee[] {
    return employees;}
    getNavigationList(): List[] {
      return navigation;
    }
  
    getContent(): string {
      return text;
    }
  }

