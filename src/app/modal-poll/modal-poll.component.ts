import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-poll',
  templateUrl: './modal-poll.component.html',
  styleUrls: ['./modal-poll.component.scss']
})
export class ModalPollComponent implements OnInit {

  public show_modal: boolean = false;
  @Input() public title_modal : string;
  @Output() setTeam:EventEmitter<string> = new EventEmitter<string>();
  @Input() public team_selected : string;

  constructor() { }

  ngOnInit() {
  }

  toggle_modal(): void {
    this.show_modal = !this.show_modal;
  }

  send_team(team: string): void {
    this.setTeam.emit(team);
    this.toggle_modal();
  }

}
