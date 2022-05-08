import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <ul>
        <li>
          <a
            [routerLink]="['/']"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >Cose Da Fare</a
          >
        </li>
        <li>
          <a [routerLink]="['/completed']" routerLinkActive="active"
            >Obbiettivi Completati</a
          >
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      nav {
        position: fixed;
        width: 100%;
        ul {
          display: flex;
          justify-content: center;
          list-style-type: none;
          padding:0;
          li{
            margin: 0 10px;
            a{
              text-decoration:none;
              color:black;
              &.active{
                font-weight:bold;
                color:#9c27b0;
              }
            }
          }
        }
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
