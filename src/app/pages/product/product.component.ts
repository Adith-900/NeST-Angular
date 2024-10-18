import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(public api: ApiService,private routs: ActivatedRoute){}
  item: any;

  ngOnInit(){
    const id = this.routs.snapshot.paramMap.get('id');
    console.log(id);
    

    this.api.getDataById(id).subscribe((data) =>{
      this.item = data;
      console.log(this.item);
    })
  }

}
