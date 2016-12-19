import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  host: { '(document:keyup)': 'escapePressed($event)' }
})
export class ModalComponent {
  @Input() modaltitle: string;
  @Input() modalfootertitle: string;
  @Input() showfooter: boolean

  hideContainer: boolean;
  modal: any;

  constructor(modal: ElementRef) {
    this.hideContainer = true;
    this.modal = modal;
    this.showfooter = true;
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
