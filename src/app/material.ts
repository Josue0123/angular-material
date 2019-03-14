import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatInputModule, MatIconModule, MatCardTitle} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'; 
import { NgModule } from '@angular/core';

@NgModule({
    imports : [
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatMenuModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
    ],
    exports : [
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatMenuModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
    ]
})

export class Material{}