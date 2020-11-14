import { Component, OnInit } from '@angular/core';
import {Vagon} from '../vagon';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-vagon',
  templateUrl: './vagon-form.component.html',
  styleUrls: ['./vagon-form.component.css']
})
export class VagonComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    vagonManufacturer: new FormControl('', [Validators.required]),
    vagonNum: new FormControl('', [Validators.required, this.userNameValidator])
  });

  manufacturer: string;
  num: any;
  statement: string;
  type: string;
  vagons: Vagon[] = [];
  sum: number;
  check = 0;
  statements  = ['Good', 'Broken', 'In repairing', 'Can use'];
  // tslint:disable-next-line:typedef
  checksum(oper: number){
    while (oper % 10 !== 0){
      oper++;
      this.check++;
    }
  }
  // tslint:disable-next-line:typedef
  heightco(operate: number): number{
    if (operate % 2 === 0 && operate < 10){
      operate *= 1;
    }
    else{
      operate *= 2;
    }
    if (operate > 10){
      operate = operate[0] + operate[1];
    }
    return operate;
  }
  userNameValidator(control: FormControl): {[s: string]: boolean}{

  this.num = Number(control.value.num);
  this.sum = this.heightco(this.num[0]) +
              this.heightco(this.num[1]) +
              this.heightco(this.num[2]) +
              this.heightco(this.num[3]) +
              this.heightco(this.num[4]) +
              this.heightco(this.num[5]) +
              this.heightco(this.num[6]);
  this.checksum(this.sum);
  if (this.check === control.value.num[7]){
      return {userName: true};
    }
  return null;
  }
  // tslint:disable-next-line:typedef
  submit2(){
    console.log(this.myForm);
  }
  // tslint:disable-next-line:typedef
  submit(form: NgForm) {
    // this.num = form.value.num;
    // this.sum = this.heightco(this.num[0]) +
    //   this.heightco(this.num[1]) +
    //   this.heightco(this.num[2]) +
    //   this.heightco(this.num[3]) +
    //   this.heightco(this.num[4]) +
    //   this.heightco(this.num[5]) +
    //   this.heightco(this.num[6]);
    // this.checksum(this.sum);
    // if (this.check === form.value.num[7]) {
      switch (form.value.num[0]) {
        case '2': {
          this.type = 'Крытый грузовой вагон';
          break;
        }
        case '3': {
          this.type = 'Специализированный вагон';
          break;
        }
        case '4': {
          this.type = 'Платформа';
          break;
        }
        case '5': {
          this.type = 'Платформа';
          break;
        }
        case '6': {
          this.type = 'Полувагон';
          break;
        }
        case '7': {
          this.type = 'Цистерна';
          break;
        }
        case '8': {
          this.type = 'Изотермический вагон';
          break;
        }
        case '9': {
          this.type = 'Специализированный вагон';
          break;
        }
        default: {
          this.type = 'Неизвестный вагон';
          break;
        }
      }
      this.vagons.push(new Vagon(form.value.num, form.value.manufacturer, form.value.statement, this.type));
    // // } else {
    //   alert('Write correct Number!');
    // }
  }
  ngOnInit(): void {
  }

}
