import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auction-tutorial-y2020';
  auctionListTitle = 'this is an auction list (from variable)';


  public onAuctionListTitleClicked(event: any): void {
    console.log(event);
}

}
