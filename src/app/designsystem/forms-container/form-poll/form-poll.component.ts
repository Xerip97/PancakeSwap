import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PollService } from '@app/shared/services/forms/poll/poll.service';

interface Poll {
  option_1: string,
  option_2: string,
  option_3: string

}

interface PollOptions {
  prop_1: string;
  prop_2: string;
  prop_3: string;
}

@Component({
  selector: 'pancakeswap-form-poll',
  templateUrl: './form-poll.component.html',
  styleUrls: ['./form-poll.component.css']
})
export class FormPollComponent implements OnInit {
  @Input() firstOption: any
  _poll: Poll = {
    option_1: 'Vote now',
    option_2: 'Soon',
    option_3: 'Closed'
  };

  _poll_options: PollOptions = {
    prop_1: '',
    prop_2: '',
    prop_3: '',
  }

  @Input() set poll(value: Partial<Poll>) {
    this._poll = { ...this._poll, ...value };
  }

  constructor(private pollService : PollService) { }

  @Input() set poll_options(value: Partial<PollOptions>) {
    this._poll_options = { ...this._poll_options, ...value };
  }

  callSendFirst() {
  let proposal = this.firstOption
  return this.pollService.firstProposal(proposal)
  }
  callSendProposal(e: any) {
    if(e.target.checked){
      return this.pollService.sendProposal(e.target.value)
    }

  }

  ngOnInit(): void {
   this.callSendFirst()
  }

}
