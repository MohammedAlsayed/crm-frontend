import { colors } from './utils.js'
import { transparentize } from './utils.js';
import i18n from '../components/i18n.ts';

const { t } = i18n.global
export const yearlyTarget = {
    type: 'line',
    data: {
    labels: [2017, 2018, 2019, 2020],
    datasets: [
        {
        label: t('expected_target'),
        data: [5655000.12, 7079658.00, 6070000.00, 6240000.00],
        borderColor: colors['green'],
        backgroundColor: transparentize('green', 0.5),
        borderWidth: 2,
        },
        {
        label: t('actual_target'),
        data: [4267772.20, 4065407.30, 6015207.11, 3265761.41],
        borderColor: colors['blue'],
        backgroundColor: transparentize('blue', 0.5),
        borderWidth: 2,
        }
        ]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          color: {
            enabled: true,
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: t('general.SAR')
            }
          }
        }
      },
}
export default yearlyTarget;