import { Component } from '@angular/core';
import {
  faMagnifyingGlass,
  faUser,
  faCaretDown,
  faLocationDot,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

// Define an interface to represent the structure of menu items
interface MenuItem {
  name: string;
  textColor: string;
  subMenu?: SubMenuItem[];
  showSubMenu?: boolean; // Add showSubMenu property
}

interface SubMenuItem {
  name: string; // Category name
  items: string[]; // Items within the category
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faCaretDown = faCaretDown;
  faLocationDot = faLocationDot;
  faShoppingBag = faShoppingBag;

  menuItems: MenuItem[] = [
    {
      name: 'Women',
      textColor: '#333',
      subMenu: [
        {
          name: 'Shoes',
          items: ['Athletic & Sneakers', 'Boots & Booties'],
        },
      ],
    },
    { name: 'Men', textColor: '#333', subMenu: [
      {
        name: 'Shoes',
        items: ['Athletic & Sneakers', 'Boots'],
      },
    ], },
    { name: 'Kids', textColor: '#333' },
    { name: 'Bags & Accesories', textColor: '#333' },
    { name: 'Athletic & Sneakers', textColor: '#333' },
    { name: 'Shops', textColor: '#333' },
    { name: 'Brands', textColor: '#333' },
    { name: 'New Arrivals', textColor: '#333' },
    { name: 'Clearance', textColor: '#C31E45' },
    { name: 'Deals', textColor: '#C31E45' },
  ];

    // Function to toggle the display of the sub-menu
    toggleSubMenu(menuItem: MenuItem) {
      menuItem.showSubMenu = !menuItem.showSubMenu;
    }
}
