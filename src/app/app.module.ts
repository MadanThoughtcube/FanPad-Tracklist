import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';

// Phone Input With Country Codes
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { InputFormComponent } from './input-form/input-form.component';

// Data Collection Page 
import { DataCollectionPageComponent } from './data-collection-page/data-collection-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { ContentBoxComponent } from './content-box/content-box.component';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GatedTestComponent } from './gated-test/gated-test.component';
import { ContractsService } from './contracts.service';
import { PollTemplateComponent } from './poll-template/poll-template.component';
//Tracklist
import { SongRowsComponent } from './song-rows/song-rows.component';
import { TracklistComponent } from './tracklist/tracklist.component';
import { MatDialogModule } from'@angular/material/dialog';

//Bottomsheet
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import { LinksComponent } from './links/links.component';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PopuplinkComponent } from './popuplink/popuplink.component'



// import { checkBalance } from './thirdweb';

@NgModule({
  declarations: [
    AppComponent, InputFormComponent, DataCollectionPageComponent, ContentPageComponent, ContentBoxComponent, GatedTestComponent, PollTemplateComponent, SongRowsComponent, TracklistComponent, BottomsheetComponent, LinksComponent, PopuplinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule
  

  ],
  providers: [ContractsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
