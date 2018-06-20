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
  dataset_code: string;
  start_date: string;
  end_date: string;
  collapse: string;
}

export class RepresentationData{
  stockName: string;
  newestAvailableDate: string;
  oldestAvailableDate: string;
  chartLabels: string[];     
  chartData: {
    label: string,
    data: number[],
    borderWidth: number,
    fill: boolean
  }[];
  chartDataAdj: {
    label: string,
    data: number[],
    borderWidth: number,
    fill: boolean
  }[];
  chartColors: {
    backgroundColor: string,
    borderColor: string
  }[];
  columnNames: string[];
  tableData: any[][];
  chartOptions: any;
}
