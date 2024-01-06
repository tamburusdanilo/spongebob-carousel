import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  myInterval = 9999999999999999;


  sendTokenAndRedirToOtherApp() {
    localStorage.setItem('authToken', 'dsqw#@#WED');
    const token = localStorage.getItem('authToken');
    window.postMessage({ token }, 'https://gleeful-cocada-8feb3c.netlify.app');
  }




}
