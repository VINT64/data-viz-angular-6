import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { QtsService } from './qts.service';
import { RequestData } from './data';
@Component({
  selector: 'app-qts',
  templateUrl: './qts.component.html',
  styleUrls: ['./qts.component.css'],
  providers: [QtsService]
})
export class QtsComponent implements OnInit {
  constructor(private fb: FormBuilder, private qtsService: QtsService) {
  }
  
  ngOnInit() {
    this.createForm();
    this.resetForm();
  }
  
  qtsForm: FormGroup;
  
  os = RequestData.orders;
  cs = RequestData.collapses;
  ts = RequestData.transforms;
  
  createForm() {
    this.qtsForm = this.fb.group({
      databaseCode: ['', Validators.required],
      datasetCode: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      limit: ['', [Validators.required, Validators.min(0) ] ],
      order: ['', Validators.required],
      transformation: ['', Validators.required],
      collapse: ['', Validators.required] 
    });
  }
  resetForm(){
    this.qtsService.defaultForm(this.qtsForm);
  }
  
  chartReady = false;
  
  onSubmit() { 
    this.qtsService.sendRequest(
    this.qtsForm).subscribe({next: response => {
      if (response == 'success')
        console.log(response);
      else
        console.log(response);
        /* here test fails */
      },
      error: err => {console.error(err)
      /* here test fails too */
      },
      complete: () => {}
      }); 
  }
  
}
