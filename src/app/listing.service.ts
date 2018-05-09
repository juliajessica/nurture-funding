import { Injectable } from '@angular/core';
import { Listing } from './model/listing-model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ListingService {
  listings: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { }

  getListing(){

  }

}
