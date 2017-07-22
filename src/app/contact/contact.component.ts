import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {Headers, Http, RequestOptions} from '@angular/http';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageSent: boolean = false;
  url: string = 'https://script.google.com/macros/s/AKfycbzTHfIDbrcbNcV35LiTvlNCuSr7TChrs-zFkXyKFkKu0660mRnO/exec';

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const  headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post(this.url, form.value , {headers: headers}).subscribe(data => console.log(data), err => console.log(err));
    form.reset();
    this.messageSent = true;
    setTimeout(() => {
      this.messageSent = false;
    }, 2000);
  }
}
