import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  data1;
  deviceValue;
  dash: any = [];
  selectedTeam='LMFR_M081-NIORT';
  etablissement;
  chargesPatronalesChart;
  linewithDataChart;
  chargesSalarialesChart;
  simplePieChart;
  
  constructor(public apiService : ApiService,private route: ActivatedRoute) { 
    this.fillCharts();
  }
  onChange(deviceValue){
    this.deviceValue=deviceValue;
    this.apiService.getDashbordData(this.deviceValue).subscribe(data =>{
      this.dash =  data; 
      this.fillCharts();
    });
  }



  
  ngOnInit() { 
          this.route.queryParams.subscribe(params =>{
            this.etablissement = params['etablissement'];           
          })
          
          this.apiService.getDashbordData(this.selectedTeam).subscribe(data =>{
            this.dash =  data;   
            this.fillCharts();
          });
  }


  fillCharts(){
    console.log(parseFloat(this.dash['$cad-Cadre']).toFixed(2))
    console.log(parseFloat(this.dash['$agm-Agent de maitrise']).toFixed(2))
    console.log(parseFloat(this.dash['$emp-Employé']).toFixed(2))
    console.log(parseFloat(this.dash['$app-Apprenti employé']).toFixed(2))
    this.simplePieChart = {
      chart: {
        height: 250,
        type: 'pie',
      },
      //series: [parseFloat(this.dash['$cad-Cadre']).toFixed(2), parseFloat(this.dash['$agm-Agent de maitrise']).toFixed(2), parseFloat(this.dash['$emp-Employé']).toFixed(2), parseFloat(this.dash['$app-Apprenti employé']).toFixed(2)],
      series: [parseFloat(this.dash['$cad-Cadre']), parseFloat(this.dash['$agm-Agent de maitrise']), parseFloat(this.dash['$emp-Employé']), parseFloat(this.dash['$app-Apprenti employé'])],
      //series: [30,20,10,10],
      labels: ['Cadre','Agent de maîtrise', 'Employé','Apprenti'],
      colors: ['#34c38f', '#f1b44c', '#f46a6a','#556ee6'],
      legend: {
        show: true,  
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 5,
        itemMargin: {
          horizontal: 10,
          vertical: 0
        }
      },
      responsive: [{
        breakpoint: 600,
        options: {
          chart: {
            height: 240
          },
          legend: {
            show: false
          },
        }
      }]
    };
    this.linewithDataChart = {
      chart: {
        height: 380,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#34c38f', '#556ee6', '#f46a6a'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [3, 3, 3],
        curve: 'smooth'
      },
      series: [{
        name: 'Masse Salariale',
        data: [parseFloat(this.dash['MMM3']).toFixed(2), parseFloat(this.dash['MMM2']).toFixed(2), parseFloat(this.dash['MMM1']).toFixed(2), +parseFloat(this.dash['MMMC']).toFixed(2)]
      },
      {
        name: 'Total Charges Salariales',
        data: [parseFloat(this.dash['CSM3']).toFixed(2), parseFloat(this.dash['CSM2']).toFixed(2), parseFloat(this.dash['CSM1']).toFixed(2), +parseFloat(this.dash['CSMC']).toFixed(2)]
      },
      {
        name: 'Total Charges Patronales',
        data: [parseFloat(this.dash['CPM3']).toFixed(2), parseFloat(this.dash['CPM2']).toFixed(2), parseFloat(this.dash['CPM1']).toFixed(2), +parseFloat(this.dash['CPMC']).toFixed(2)]
      }],
      title: {
        text: '',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.2
        },
        borderColor: '#f1f1f1'
      },
      xaxis: {
        categories: [this.dash['per_m3'], this.dash['per_m2'], this.dash['per_m1'], this.dash['per_mc']],
        title: {}
      },
      yaxis: {
        title: {}
      },
      legend: {
        show: true,
        // position: 'top',
        // horizontalAlign: 'right',
        // floating: true,
        itemMargin: {
          horizontal: 10,
          vertical: 0
        }
      },
      responsive: [{
        breakpoint: 600,
        options: {
          chart: {
            toolbar: {
              show: false
            }
          },
          legend: {
            show: true
          },
        }
      }]
    };
  
    this.chargesPatronalesChart = {
      chart: {
        height: 300,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: 'rounded',
          columnWidth: '45%',
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      colors: ['#34c38f', '#556ee6', '#f46a6a'],
      series: [{
        name: 'Nombre',
        data: [parseFloat(this.dash['URSAFF_s']).toFixed(2), parseFloat(this.dash['Retraite_s']).toFixed(2), parseFloat(this.dash['Prevoyance_s']).toFixed(2), parseFloat(this.dash['Mutuelle_s']).toFixed(2), parseFloat(this.dash['Assurance_s']).toFixed(2), parseFloat(this.dash['APEC_s']).toFixed(2)]
      }],
      xaxis: {
        categories: ['URSAFF', 'APEC', 'Retraite', 'Prévoyance', 'Mutuelle', 'Assurance'],
      },
      yaxis: {},
      fill: {
        opacity: 1
      },
      grid: {
        borderColor: '#f1f1f1'
      },
      tooltip: {}
    };
  
    this.chargesSalarialesChart = {
      chart: {
        height: 300,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: 'rounded',
          columnWidth: '45%',
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      colors: ['#556ee6'],
      series: [{
        name: 'Nombre',
        data: [parseFloat(this.dash['URSAFF_p']).toFixed(2), parseFloat(this.dash['Retraite_p']).toFixed(2), parseFloat(this.dash['Prevoyance_p']).toFixed(2), parseFloat(this.dash['Mutuelle_p']).toFixed(2), parseFloat(this.dash['Assurance_p']).toFixed(2), parseFloat(this.dash['APEC_p']).toFixed(2)]
      }],
      xaxis: {
        categories: ['URSAFF', 'APEC', 'Retraite', 'Prévoyance', 'Mutuelle', 'Assurance'],
      },
      yaxis: {},
      fill: {
        opacity: 1
      },
      grid: {
        borderColor: '#f1f1f1'
      },
      tooltip: {}
      
    };
  }

}
