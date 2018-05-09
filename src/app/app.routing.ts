import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { CampaigndetailComponent } from './campaigndetail/campaigndetail.component';
import { CampaignComponent } from './campaign/campaign.component';

const appRoutes: Routes = [
  {
  path: '',
  component: HomepageComponent
  },
  {
  path: 'about',
  component: AboutComponent
  },
  {
  path: 'explore',
  component: ExploreComponent
  },
  {
  path: 'explore/:id',
  component: CampaigndetailComponent
  },
  {
  path: 'campaign',
  component: CampaignComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
