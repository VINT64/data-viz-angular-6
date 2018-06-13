export class RequestData {
  static orders = ['asc', 'desc'];
  static collapses = ['none', 'daily', 'weekly', 'monthly', 'quarterly', 'annual'];
  static transforms = ['none', 'diff', 'rdiff', 'rdiff_from', 'cumul', 'normalise'];
}

export class ResponseData{
  data: any[][];
  name: string;
  description: string;
  newest_available_date: string;
  oldest_available_date: string;
  column_names: string[];
}

export class RepresentationData{
  stockName: string;
  newestAvailableDate: string;
  oldestAvailableDate: string;
  chartLabels: string[];     
  chartData: {
    label: string,
    data: number[],
    backgroundColor: string,
    borderColor: string,
    borderWidth: number,
    fill: boolean
  }[];
  chartDataAdj: {
    label: string,
    data: number[],
    backgroundColor: string,
    borderColor: string,
    borderWidth: number,
    fill: boolean
  }[];
  columnNames: string[];
  tableData: any[][];
  chartOptions: any;
}
