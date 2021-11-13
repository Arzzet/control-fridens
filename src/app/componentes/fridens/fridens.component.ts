import { Component, OnInit } from '@angular/core';
import { Friden } from 'src/app/modelo/friden.model';
import { FridenService } from 'src/app/servicios/friden.service';

@Component({
  selector: 'app-fridens',
  templateUrl: './fridens.component.html',
  styleUrls: ['./fridens.component.css']
})
export class FridensComponent implements OnInit {

  fridens: Friden[];

  constructor(private fridenService: FridenService) { }

  ngOnInit(): void {
    this.fridenService.getFridens().subscribe(fridens => {
      this.fridens = fridens;
    })
  }

}
