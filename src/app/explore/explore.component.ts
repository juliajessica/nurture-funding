import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ListingService } from '../listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: [ListingService]
})
export class ExploreComponent implements OnInit {
  listings: FirebaseListObservable<any[]>;

  constructor(private router: Router, private listingService: ListingService) { }

  ngOnInit() {
  this.listings = this.listingService.getListings();
  }

  detailListing(clickedListing){
    this.router.navigate(['explore', clickedListing.$key])
  }
}
