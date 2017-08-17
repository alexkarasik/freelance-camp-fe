import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://alexkarasik.com', 'Ruby on Rails', 150, 120, 15, 'alexkarasik89@gmail.com')
  proposalTwo: Proposal = new Proposal(99, 'Xyz Company', 'http://alexkarasik.com', 'Ruby on Rails', 150, 120, 15, 'alexkarasik89@gmail.com')
  proposalThree: Proposal = new Proposal(100, 'Something Company', 'http://alexkarasik.com', 'Ruby on Rails', 150, 120, 15, 'alexkarasik89@gmail.com')


  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}