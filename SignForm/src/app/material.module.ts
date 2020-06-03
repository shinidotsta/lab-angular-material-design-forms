import {NgModule} from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'



@NgModule({
    imports:[MatDialogModule,MatTableModule,MatFormFieldModule,MatInputModule,
        MatButtonModule, MatToolbarModule,MatIconModule],
    exports:[MatDialogModule,MatTableModule,MatFormFieldModule,MatInputModule,
            MatButtonModule, MatToolbarModule,MatIconModule],
   
})
export class MaterialModule
{

}