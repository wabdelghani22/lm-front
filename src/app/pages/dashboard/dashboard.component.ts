import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {

  constructor() { }

  simplePieChart = {
    chart: {
      height: 250,
      type: 'pie',
    },
    series: [15, 79, 6],
    labels: ['Agent de maîtrise', 'Employé', 'Cadre'],
    colors: ['#34c38f', '#f1b44c', '#f46a6a'],
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

  linewithDataChart = {
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
      data: [320, 340, 360, 380, 450, 500]
    },
    {
      name: 'Total Charges Salariales',
      data: [50, 100, 150, 165, 185, 200]
    },
    {
      name: 'Total Charges Patronales',
      data: [0, 15, 30, 50, 65, 80]
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
      categories: ['Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
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

  chargesPatronalesChart = {
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
      data: [100, 5, 30, 8, 15, 25]
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

  chargesSalarialesChart = {
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
      data: [60, 5, 20, 7, 10, 5]
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

  ngOnInit() { }
}
