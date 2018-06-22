import { ViewChild, Component, OnInit, isDevMode } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms'
import { QtsService } from './qts.service';
import { RequestData } from './data';
import { QtsChartsComponent } from './qts-charts.component';

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
  
  devMode = isDevMode();
  dateUpdate: Date = null;
  
  startDateValidator: ValidatorFn = (c: FormControl) => {
    if (c.value == null){
      this.dateUpdate = null; //clear cross-checks
      return null; //Validators.required will cover this
    }
    let startDate = new Date(c.value),
    currentDay = new Date(new Date().setUTCHours(0, 0, 0, 0));
    if (startDate > currentDay){
      this.dateUpdate = null; //clear cross-checks 
      return  {in_past: false}
    }
    if (this.qtsForm != undefined && this.qtsForm.value.end != null){
      let endDate = new Date(this.qtsForm.value.end);
      //cross-check
      if (this.dateUpdate == null){
        //initialise cross-check with endDate
        this.dateUpdate = startDate; 
        this.qtsForm.controls.end.updateValueAndValidity();
        
      }
      else{
        //endDate initialised cross-check
        endDate = this.dateUpdate;
        this.dateUpdate = null;        
      }
      if (startDate > endDate)  
       return {later_than_end_date: false};
    }
    this.dateUpdate = null;
    return null;
  }
  
  endDateValidator: ValidatorFn = (c: FormControl) => {
    if (c.value == null){
      this.dateUpdate = null; //clear cross-checks
      return null; //Validators.required will cover this
    }
    let endDate = new Date(c.value),
    currentDay = new Date(new Date().setUTCHours(0, 0, 0, 0));
    if (endDate > currentDay){
      this.dateUpdate = null; //clear cross-checks 
      return  {in_past: false}
    }
    
    if (this.qtsForm != undefined && this.qtsForm.value.start != null){
      let startDate = new Date(this.qtsForm.value.start);
      //cross-check
      if (this.dateUpdate == null){
        //initialise cross-check with startDate
        this.dateUpdate = endDate; 
        this.qtsForm.controls.start.updateValueAndValidity();
        //console.log(this.dateUpdate);
      }
      else{
        //startDate initialised cross-check
        startDate = this.dateUpdate;
        this.dateUpdate = null;
      }
      //console.log('End says: start = ' + startDate.toDateString() + ', end = ' + endDate.toDateString() + ' ' + this.dateUpdate);
      if (startDate > endDate)
        return {earlier_than_start_date: false};
    }
    this.dateUpdate = null; //clear cross-checks
    return null;
  }
  
  qtsForm: FormGroup;
  
  os = RequestData.orders;
  cs = RequestData.collapses;
  ts = RequestData.transforms;
  
  createForm() {
    this.qtsForm = this.fb.group({
      databaseCode: ['', Validators.required],
      datasetCode: ['', Validators.required],
      start: ['', [Validators.required, this.startDateValidator]],
      end: ['', [Validators.required, this.endDateValidator]],
      limit: ['', [Validators.required, Validators.min(0) ] ],
      order: ['', Validators.required],
      transformation: ['', Validators.required],
      collapse: ['', Validators.required] 
    });
  }
  resetForm(){
    this.qtsService.defaultForm(this.qtsForm);
  }
  
  clearForm(){
    this.qtsForm.reset();
  }
  
  loading = false;
  
  stopLoading(){
    this.loading = false;
  }
  
  
  
  @ViewChild('charts') charts: QtsChartsComponent;
  
  error = false;
  onSubmit() { 
    this.loading = true;
    this.charts.chartsReady = false;
    this.error = false;
    this.qtsService.sendRequest(
    this.qtsForm).subscribe({next: response => {
        if (response == 'success'){
          this.error = false;
        }
        else{
          console.log(response);
          this.loading = false;
          this.error = true;
          /* here test fails */
        }
      },
        
      error: err => {console.error(err);
        this.loading = false;
        this.error = true;
        /* here test fails too */
      },
      complete: () => {}
    }); 
  }
  
}
