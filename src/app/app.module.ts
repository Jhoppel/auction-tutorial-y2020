import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { MouseEventDisplayComponent } from './mouse-event-display/mouse-event-display.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuctionListDetailComponent } from './auction-list-detail/auction-list-detail.component';
import { AuctionDataService} from './shared/auction-data.service';
import { AngularDateHttpInterceptorService} from './shared/angular-date-http-interceptor.service';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { HelperService} from './shared/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    AuctionListComponent,
    MouseEventDisplayComponent,
    AuctionListDetailComponent,
    AuctionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AngularDateHttpInterceptorService,
      multi: true
  }, AuctionDataService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
