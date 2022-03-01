import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-layuot',
  templateUrl: './site-layuot.component.html',
  styleUrls: ['./site-layuot.component.css']
})
export class SiteLayuotComponent implements OnInit {

  links = [
    {url: '/overview', name: 'Обзор'},
    {url: '/analytics', name: 'Аналитика'},
    {url: '/history', name: 'История'},
    {url: '/order', name: 'Добавить заказ'},
    {url: '/categories', name: 'Ассортимент'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  logout(event: Event) {
    event.preventDefault()

  }
}
