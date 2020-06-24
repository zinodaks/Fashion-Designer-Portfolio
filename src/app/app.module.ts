import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BiographyComponent } from './biography/biography.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PagebannerComponent } from './pagebanner/pagebanner.component';
import { CollabosComponent } from './collabos/collabos.component';
import { PagedPortfolioComponent } from './paged-portfolio/paged-portfolio.component';
import { ConnectionService } from './connection.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import { HttpClient } from '@angular/common/http';
import { CollageComponent } from './collage/collage.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BiographyComponent,
    SlideshowComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    CurriculumVitaeComponent,
    ProjectsComponent,
    PortfolioComponent,
    ContactComponent,
    PagebannerComponent,
    CollabosComponent,
    PagedPortfolioComponent,
    CollageComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: HttpClient) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [HttpClient]
  })
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
