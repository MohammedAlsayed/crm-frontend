import { months } from './utils.js';
import i18n from '../components/i18n.ts';

const { t } = i18n.global
export const sales = {
    type: 'line',
    data: {
    labels: months,
    datasets: [
        {
        label: t('expected_sales'),
        data: [4000000, 2000000, 3000000, 2000000, 5000000, 2200000, 1100000, 4400000, 1205000, 1000000, 30000, 4000000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(75, 192, 192, 0.5)',
        borderWidth: 2,
        },
        {
        label: t('actual_sales'),
        data: [1100000, 3300000, 2200000, 1100000, 3300000, 5500000, 300000, 1100000, 1705000, 1300000, 40000, 1000000],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235, 0.5)',
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
export default sales;