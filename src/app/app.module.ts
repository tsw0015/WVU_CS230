import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { ShoppingToolsNavBarComponent } from './shopping-tools-nav-bar/shopping-tools-nav-bar.component';
import { TopCarouselComponent } from './top-carousel/top-carousel.component';
import { TopNavBarComponent } from './headers/top-nav-bar.component';
import { LayoutMainComponent } from './layout/main/layout-main.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutBuildComponent } from './layout/build/layout-build.component';
import { LayoutCompareComponent } from './layout/compare/layout-compare.component';
import { LayoutHomeComponent } from './layout/home/layout-home.component';
import { LayoutFinancialComponent } from './layout/financial/layout-financial.component';
import { LayoutOfferComponent } from './layout/offer/layout-offer.component';
import { CarCardComponent } from './car-card/car-card.component';
import { HttpClientModule } from "@angular/common/http";
import { UserInfoComponent } from './headers/user-info.component';
import { EditUserInfoComponent } from './headers/edit-user-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    TopCarouselComponent,
    ShoppingToolsNavBarComponent,
    LayoutMainComponent,
    LayoutHomeComponent,
    LayoutBuildComponent,
    LayoutCompareComponent,
    LayoutFinancialComponent,
    LayoutOfferComponent,
    CarCardComponent,
    UserInfoComponent,
    EditUserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
