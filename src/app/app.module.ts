import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './about/education/education.component';
import { ReferencesComponent } from './about/references/references.component';
import { SkillsComponent } from './about/skills/skills.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    EducationComponent,
    ReferencesComponent,
    SkillsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
