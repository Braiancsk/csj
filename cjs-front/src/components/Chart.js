import  React from 'react';

import { Pie } from 'react-chartjs-2';
import {data} from '../Data'

export default function Chart() {
 

  return (
      <div className="max-w-[600px] w-full">
          <Pie data={data} />
      </div>
  )
}

