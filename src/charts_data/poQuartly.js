import { colors } from './utils.js'
import { transparentize } from './utils.js';
import { quarters } from './utils.js';
import i18n from '../components/i18n.ts';

const { t } = i18n.global
export const poQuartly = {
    type: 'bar',
    data: {
    labels: quarters,
    datasets: [
        {
          label: '2017',
          data: [2655000.12, 1079658.00, 3070000.00, 2240000.00],
          borderColor: colors['green'],
          backgroundColor: transparentize('green', 0.5),
          borderWidth: 2,
          fill: true
        },
        {
          label: '2018',
          data: [4267772.20, 4065407.30, 6015207.11, 3265761.41],
          borderColor: colors['blue'],
          backgroundColor: transparentize('blue', 0.5),
          borderWidth: 2,
          fill: true
        },
        {
          label: '2019',
          data: [4067772.20, 4165407.30, 2015207.11, 2265761.41],
          borderColor: colors['orange'],
          backgroundColor: transparentize('orange', 0.5),
          borderWidth: 2,
          fill: true
        },
        {
          label: '2020',
          data: [1067772.20, 4365407.30, 2115207.11, 3965761.41],
          borderColor: colors['purple'],
          backgroundColor: transparentize('purple', 0.5),
          borderWidth: 2, 
          fill: true
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: t('SAR')
            }
          }
        }
      },
}
export default poQuartly;