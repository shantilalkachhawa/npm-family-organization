import { Component, Input, OnInit } from '@angular/core';
import { FamilyMembers } from './interface/org';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss'],
})
export class FamilyTreeComponent implements OnInit {
  constructor() {}
  @Input() family_members!: FamilyMembers;
  @Input() isFirst!: boolean;

  ngOnInit(): void {}
}
