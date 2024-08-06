import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportespage',
  templateUrl: './reportespage.component.html',
  styles: `
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
    padding: 0;
    font-family: Roboto, "Helvetica Neue", sans-serif;
    background-color: #f0f0f0;
  }
.container {
    width: 100%;
      max-width: 600px;
      padding: 20px;
      background-color: #4d8575;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  mat-card {
    width: 100%;
    padding: 20px;
    background-color: white;
  }

  mat-form-field {
    width: 100%;
    margin-bottom: 20px;
  }

  .button-container {
    text-align: center;
    margin-top: 20px;
  }

  button{
    margin:5px;
  }
  `
})
export class ReportespageComponent {
  notifForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.notifForm = this.fb.group({
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reportType: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      recipient: ['', Validators.required]
    });
  }


  goHome() {
    this.router.navigate(['/auth/registro']);
  }
  
}
