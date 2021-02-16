import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  objRows=[];
  addtable=[];
  CompareMode:boolean=false;
  status:string="ok";

  headers = new HttpHeaders({
    'Content-Type': 'application/json'});


  url = 'https://jsonplaceholder.typicode.com/photos'

  ngOnInit(): void {
this.fetchDetails()
  }


  fetchDetails() {
    return this.http.get<[]>(this.url, { headers: this.headers }).subscribe(res => {
      this.objRows = res.slice(0, 5); 
      console.log('ganesh', this.objRows)
    })
  }


  userCompare(value) {
    if (this.CompareMode) {
      this.objRows = this.objRows.filter(mov => mov.id !== value.id);
      // this.objRows.remove(value)
      console.log("remove code works");
      this.status = "remove works";
    } else {

      this.addtable.push(value);
      console.log("compare code works");
      this.status = "compare works";
    }
console.log(value);



    this.CompareMode = !this.CompareMode;
  }




}








