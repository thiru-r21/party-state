import { Component, ViewEncapsulation } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {

}
