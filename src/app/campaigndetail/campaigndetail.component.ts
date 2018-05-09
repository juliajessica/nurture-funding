import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Listing } from '../model/listing-model';

@Component({
  selector: 'app-campaigndetail',
  templateUrl: './campaigndetail.component.html',
  styleUrls: ['./campaigndetail.component.css']
})
export class CampaigndetailComponent implements OnInit {
  listingId: number;
  // Listing;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

}
