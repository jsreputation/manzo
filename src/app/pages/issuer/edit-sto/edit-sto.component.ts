import { Component, OnInit } from '@angular/core';
import { editSto } from 'src/app/core/constants/editsto';

@Component({
  selector: 'app-edit-sto',
  templateUrl: './edit-sto.component.html',
  styleUrls: ['./edit-sto.component.scss']
})
export class EditStoComponent implements OnInit {
  editstoinputs = editSto;
  constructor() { }

  ngOnInit(): void {
  }

}
