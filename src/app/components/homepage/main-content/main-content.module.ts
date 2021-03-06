import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentRoutingModule } from './main-content-routing.module';
import { CentercontentComponent } from '../centercontent/centercontent.component';
import { SidebarItemComponent } from '../sidebar/sidebar-item/sidebar-item.component';
import { CentreRowComponent } from '../centercontent/centre-row/centre-row.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProcessString } from 'src/app/shared/processString';
import { CardComponent } from '../card/card.component';
import { SearchitemcardComponent } from '../searchitemcard/searchitemcard.component';
import { ResultpageComponent } from '../resultpage/resultpage.component';
import { HomepageComponent } from '../homepage.component';
import { HeaderComponent } from '../header/header.component';
import { InputsuggestionsComponent } from '../header/inputsuggestions/inputsuggestions.component';
import { PlayMusicComponent } from '../play-music/play-music.component';
import { playAudio } from 'src/app/services/playAudio';
import { AllResultPageComponent } from './all-result-page/all-result-page.component';

@NgModule({
  declarations: [
    CentercontentComponent,
    SidebarItemComponent,
    CentreRowComponent,
    CardComponent,
    SearchitemcardComponent,
    SidebarComponent,
    ResultpageComponent,
    ProcessString,
    PlayMusicComponent,
    AllResultPageComponent
  ],
  imports: [
    CommonModule,
    MainContentRoutingModule
  ],
  providers:[
    playAudio
  ]
})
export class MainContentModule { }
