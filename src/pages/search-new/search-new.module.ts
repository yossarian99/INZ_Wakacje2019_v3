import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchNewPage } from './search-new';
// import { StarRatingModule } from 'ionic3-star-rating';
import { IonicImageLoader } from 'ionic-image-loader';
// import { StarRatingModule } from 'ionic3-star-rating';
import { SharedModule } from '../../app/app.shared.module';
@NgModule({
  declarations: [
    SearchNewPage,
  ],
  imports: [
    // StarRatingModule,
    IonicImageLoader,
    SharedModule,
    IonicPageModule.forChild(SearchNewPage),
  ],
})
export class SearchNewPageModule {}
