import { colors } from './utils.js'
import { transparentize } from './utils.js';
import { months } from './utils.js';
import i18n from '../components/i18n.ts';

const { t } = i18n.global
export const visits = {
    type: 'line',
    data: {
    labels: months,
    datasets: [
        {
        label: t('visits_chart.expected'),
        data: [4000, 2000, 3000, 2000, 5000, 2200, 1100, 4400, 1205, 1000, 3000, 4000],
        borderColor: colors['green'],
        backgroundColor: transparentize('green', 0.5),
        borderWidth: 2,
        },
        {
        label: t('visits_chart.actual'),
        data: [11000, 3300, 2200, 110, 3300, 550, 300, 1100, 1705, 1300, 400, 1000],
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
        }
      },
}
export default visits;