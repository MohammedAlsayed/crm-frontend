import { colors } from './utils.js'
import { transparentize } from './utils.js';
import i18n from '../components/i18n.ts';

const { t } = i18n.global
export const employeeTarget = {
    type: 'bar',
    data: {
    labels: ["Ahmed Fifi", "Ahmed Swedan", "Aamer"],
    datasets: [
        {
        label: t('expected_target'),
        data: [4000000, 2000000, 4300000],
        borderColor: colors['green'],
        backgroundColor: transparentize('green', 0.5),
        borderWidth: 2,
        borderRadius: 5,
        },
        {
        label: t('actual_target'),
        data: [4267772.20, 4065407.30, 6015207.11, 3265761.41],
        fill: false,
        borderColor: colors['blue'],
        backgroundColor: transparentize('blue', 0.5),
        borderWidth: 2,
        borderRadius: 5,
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
              text: t('SAR')
            }
          }
        }
      },
}
export default employeeTarget;