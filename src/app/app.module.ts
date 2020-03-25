import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { stepSwitcherReducer } from './step-switcher/step-switcher.reducer';
import { StepSwitcherComponent } from './step-switcher/step-switcher.component';
import { CounterComponent } from './counter/counter.component';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

let reducers = {
    stepValue: stepSwitcherReducer
};

@NgModule({
    declarations: [
        AppComponent,
        StepSwitcherComponent,
        CounterComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
          }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
