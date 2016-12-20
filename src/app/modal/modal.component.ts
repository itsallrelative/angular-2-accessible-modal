import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  host: { '(document:keyup)': 'escapePressed($event)' }
})
export class ModalComponent {
  @Input() modaltitle: string;
  @Input() modalfootertitle: string;
  @Input() modaldescription: string;
  @Input() showfooter: boolean;
  @Input() showheader: boolean;

  hideContainer: boolean;
  modal: any;

  constructor(modal: ElementRef) {
    this.hideContainer = true;
    this.modal = modal;
    this.showheader = false;
    this.showfooter = false;
  }

  ngOnInit(){
    if(typeof this.modaltitle != 'undefined') this.showheader = true;
    if(typeof this.modalfootertitle != 'undefined') this.showfooter = true;
  }

  openModal(){
    this.hideContainer = false;
    this.modal.nativeElement.querySelector('.modal').focus();
  }

  closeModal(){
    this.hideContainer = true;
  }

  escapePressed(event){
    if(event && event.keyCode == 27){
      this.closeModal();
    }
  }
}
