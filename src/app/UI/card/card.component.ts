import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SlicePipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  constructor(private api:ApiService){}
  products:any=[]

  ngOnInit()
{
  this.api.getData().subscribe((data:any) => {
    this.products= data;
  })
}
  
}
