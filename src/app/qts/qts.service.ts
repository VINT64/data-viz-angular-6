import { Injectable } from '@angular/core';
import { RequestData, ResponseData, RepresentationData } from './data';
import { DatePipe } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class QtsService {
  
  private latestCharts = new Subject<RepresentationData>();
  latestCharts$ = this.latestCharts.asObservable();
  
  constructor(private datePipe: DatePipe, private http: HttpClient) { }
  
  defaultForm(form){
    form.reset({
    databaseCode: 'WIKI',
    datasetCode: 'AAPL',
    start: '2017-06-06',
    end: '2018-06-06',
    limit: 0,
    order: RequestData.orders[0],
    transformation: RequestData.transforms[3],
    collapse: RequestData.collapses[4]
    });
  }
  /* TODO make separate config file */
  private readonly url = 'https://data-viz-v1.herokuapp.com/services/dummyRequest';
  private readonly apiKey = 'DKczFdjuL_16KZVxeZKk';
  colIndex = -1;
  format = 'd-M-yyyy';
   
  sendRequest(form): Observable<string> {
    const val = form.value;

    var params = 'api_key=' + this.apiKey
    + '&dataset_code=' + val.datasetCode
    + '&database_code=' + val.databaseCode
    + '&start_date=' + this.datePipe.transform(val.start, this.format)
    + '&end_date=' + this.datePipe.transform(val.end, this.format)
    + '&order=' + val.order
    + '&collapse=' + val.collapse
    + '&transformation=' + val.transformation;

    if (val.limit > 0) {
      params = params + '&limit=' + val.limit;
    }
    if (this.colIndex !== -1) {
      params = params + '&column_index=' + this.colIndex;
    }
    
    return new Observable((observer) => 
      this.http.get<{dataset: ResponseData}>(
      this.url + '?' + params).subscribe({
        next: r => {
        
        var response = r.dataset;  
        //console.log(response);
        var labels: string[] = [];        
        var openValues: number[] = [];
        var highValues: number[] = [];
        var lowValues: number[] = [];
        var closeValues: number[] = [];
        var openValuesAdj: number[] = [];
        var highValuesAdj: number[] = [];
        var lowValuesAdj: number[] = [];
        var closeValuesAdj: number[] = [];
        
        for (let i = 0; i < response.data.length; i++) {
          labels.push(response.data[i][0]);
          openValues.push(response.data[i][1]);
          highValues.push(response.data[i][2]);
          lowValues.push(response.data[i][3]);
          closeValues.push(response.data[i][4]);
          openValuesAdj.push(response.data[i][8]);
          highValuesAdj.push(response.data[i][9]);
          lowValuesAdj.push(response.data[i][10]);
          closeValuesAdj.push(response.data[i][11]);
        }
        
        this.latestCharts.next(
        /* creation of new representation object */
        {
          stockName: response.name,
          newestAvailableDate: response.newest_available_date,
          oldestAvailableDate: response.oldest_available_date,
          chartLabels: labels,        
          
          chartData: [{
            label: 'Open Values',
            data: openValues,
            borderWidth: 1,
            fill: false
            }, {
            label: 'High Values',
            data: highValues,
            borderWidth: 1,
            fill: false
            }, {
            label: 'Low Values',
            data: lowValues,
            borderWidth: 1,
            fill: false
            }, {
            label: 'Close Values',
            data: closeValues,
            borderWidth: 1,
            fill: false
            }],
          chartDataAdj: [{
            label: 'Open Values',
            data: openValuesAdj,
            borderWidth: 1,
            fill: false
            }, {
            label: 'High Values',
            data: highValuesAdj,
            borderWidth: 1,
            fill: false
            }, {
            label: 'Low Values',
            data: lowValuesAdj,
            borderWidth: 1,
            fill: false
            }, {
            label: 'Close Values',
            data: closeValuesAdj,
            borderWidth: 1,
            fill: false
          }],
          chartColors: [{
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)'},{
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)'
            }, {
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)'
            }, {
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)'          
          }],
          columnNames: response.column_names,
          tableData: response.data,
          chartOptions: {}
        }
        
        
        );
        
        observer.next('success');
        },
        error: err => {observer.error(err)},
        complete: () => {observer.complete()} 
        
      })
    );
  }
}
