import { Component } from '@angular/core';
import {
  faMagnifyingGlass,
  faUser,
  faCaretDown,
  faLocationDot,
  faShoppingBag,
  faBars,
  faXmark
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
  faBars = faBars;
  faXmark = faXmark;

  showMobileMenu = false;

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  // Function to toggle the display of the sub-menu
  toggleSubMenu(menuItem: MenuItem) {
    // Close all other sub-menus first
    this.menuItems.forEach((item) => {
      if (item !== menuItem) {
        item.showSubMenu = false;
      }
    });

    // Toggle the selected sub-menu
    menuItem.showSubMenu = !menuItem.showSubMenu;
  }

  menuItems: MenuItem[] = [
    {
      name: 'Women',
      textColor: '#333',
      subMenu: [
        {
          name: 'Women',
          items: ['Sub menu'],
        },
      ],
    },
    {
      name: 'Men',
      textColor: '#333',
      subMenu: [
        {
          name: 'Men',
          items: ['Sub menu'],
        },
      ],
    },
    {
      name: 'Kids',
      textColor: '#333',
      subMenu: [
        {
          name: 'Kids',
          items: ['Sub menu'],
        },
      ],
    },
    {
      name: 'Bags & Accesories',
      textColor: '#333',
      subMenu: [
        {
          name: 'Bags & Accesories',
          items: ['Sub menu'],
        },
      ],
    },
    {
      name: 'Athletic & Sneakers',
      textColor: '#333',
      subMenu: [
        {
          name: 'Athletic & Sneakers',
          items: ['Sub menu'],
        },
      ],
    },
    {
      name: 'Shops',
      textColor: '#333',
      subMenu: [
        {
          name: 'Shops',
          items: ['Sub menu'],
        },
      ],
    },
    {
      name: 'Brands',
      textColor: '#333',
      subMenu: [
        {
          name: 'Brands',
          items: ['Sub menu'],
        },
      ],
    },
    { name: 'New Arrivals', textColor: '#333' },
    {
      name: 'Clearance',
      textColor: '#C31E45',
      subMenu: [
        {
          name: 'Clearance',
          items: ['Sub menu'],
        },
      ],
    },
    { name: 'Deals', textColor: '#C31E45' },
  ];
}
