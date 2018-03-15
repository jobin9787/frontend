import { Component, OnInit } from '@angular/core';
import {message} from '../../models/message';
@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {

mymassge : message;
  constructor() { }

  ngOnInit() {
  }

}
