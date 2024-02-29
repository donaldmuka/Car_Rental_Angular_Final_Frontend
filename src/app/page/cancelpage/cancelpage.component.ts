import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelpage',
  templateUrl: './cancelpage.component.html',
  styleUrls: ['./cancelpage.component.css']
})

export class CancelpageComponent {

constructor(private router:Router){}

goToHomePage() {
this.router.navigate
(['/homepage']);
}

}
