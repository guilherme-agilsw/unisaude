import { Component } from '@angular/core';
import Chart, { Colors } from 'chart.js/auto';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = 'ng-chart';
  chartPesoAtividade: any = [];
  chartAnaliseDados: any = [];
  chartAtividadeDiaSemana: any = [];
  constructor() { }

  ngOnInit() {

    this.chartAnaliseDados = new Chart('canvasAnaliseDados', {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
          {
            label: 'Pressão Arterial',
            data: [120, 115, 122, 118, 125, 119, 121, 116, 123, 117, 124, 120],
            borderColor: "#53aa76",
            backgroundColor: "#53aa76",
          },
          {
            label: 'Batimentos',
            data: [68, 75, 70, 78, 69, 74, 67, 73, 66, 76, 68, 75],
            borderColor: "#7fb6fa",
            backgroundColor: "#7fb6fa",
          },
          {
            label: 'Peso',
            data: [70, 71, 71.5, 72, 72.5, 73, 73.5, 74, 74.5, 75, 75.5, 76, 75.5],
            borderColor: "#d07777",
            backgroundColor: "#d07777",
          }
        ],
      },
      options: {
        indexAxis: 'y', 
        responsive: true, 
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Análise de Dados', 
            font: {
                size: 18, 
                family: 'Arial', 
                weight: 'bold' 
            },
            padding: {
                top: 10, 
                bottom: 20 
            },
            align: 'start', 
        },
          legend: {
            position: 'bottom' 
          }
        },
      },
    });

    this.chartPesoAtividade = new Chart('canvasPesoAtividade', {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
          {
            label: 'Peso(Kg)',
            data: [70, 71, 71.5, 72, 72.5, 73, 73.5, 74, 74.5, 75, 75.5, 76, 75.5],
            borderColor: "#ff0000",
            backgroundColor: "#ff0000",
          },
          {
            label: 'Atividade Física(minutos)',
            data: [65, 55, 50, 48, 45, 44, 40, 36, 32, 21, 20, 23],
            borderColor: "#007fff",
            backgroundColor: "#007fff",
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
        responsive: true, 
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Peso X Atividade Física', 
            font: {
                size: 18, 
                family: 'Arial', 
                weight: 'bold' 
            },
            padding: {
                top: 10, 
                bottom: 20 
            },
            align: 'start', 
        },
          legend: {
            position: 'bottom' 
          }
        },
      },
    });


    this.chartAtividadeDiaSemana = new Chart('canvasAtividadeDiaSemana', {
      type: 'bar',
      data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
        datasets: [
          {
            label: 'Tempo Atividade (minutos)',
            data: [120, 115, 122, 118, 125, 119, 121, 116, 123, 117, 124, 120],
            borderColor: "#8f6599",
            backgroundColor: "#8f6599",
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
        responsive: true, 
        maintainAspectRatio: false,
        layout: {
          padding: {
              bottom: 100  
          }
      },
        plugins: {
          title: {
            display: true,
            text: 'Atividades por dia da Semana', 
            font: {
                size: 18, 
                family: 'Arial', 
                weight: 'bold' 
            },
            padding: {
                top: 10, 
                bottom: 20 
            },
            align: 'start', 
        },
          legend: {
            position: 'bottom' 
          }
        },
      }
    });
  }
}
