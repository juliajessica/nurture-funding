import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Listing } from '../model/listing-model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-campaigndetail',
  templateUrl: './campaigndetail.component.html',
  styleUrls: ['./campaigndetail.component.css'],
  providers: [ListingService]
})
export class CampaigndetailComponent implements OnInit {
  listingId: string;
  listingToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private listingService: ListingService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.listingId = urlParameters['id'];
   });
  this.listingToDisplay = this.listingService.getListingById(this.listingId);
  //changes the variable name for the specific object
  }
}
