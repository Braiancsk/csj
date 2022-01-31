import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Play to earn', 'Team', 'Pre Sale', 'Liquidity', 'Advisors', 'Airdrop', 'Marketing', 'Public Sale', 'Platform Development'],
    datasets: [
      {
        label: '# of Votes',
        data: [50, 12, 4, 6, 8, 1, 6, 8, 5],
        backgroundColor: [
          '#03EA1A',
          '#10FCF5',
          '#F2D33B',
          '#FF0000',
          'rgb(60, 179, 113)',
          'rgb(121, 129, 86)',
          'rgb(121, 255, 86)',
          'rgb(121, 0, 86)',
          'rgb(0, 0, 86)',

        ],
        borderColor: [
            '#03EA1A',
            '#10FCF5',
            '#F2D33B',
            '#FF0000',
            'rgb(60, 179, 113)',
            'rgb(121, 129, 86)',
        ],
        borderWidth: 1,
      },
    ],
  };
