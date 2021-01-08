import { Line } from 'react-chartjs-2';

export default function Spent(props) {
  var data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '时间',
        data: props.spent,
        fill: false,
        backgroundColor: '#87d068',
        borderColor: '#87d068',
      }
    ]
  }

  let options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: 10
          }
        }
      ]
    }
  }
  
  return(
    <div className="spent">
      <div className="spent-container">
        <div className="chart">
          <Line data={data} options={options} />
          <center><small>做题用时图</small></center>
        </div>
      </div>
    </div>
  )
}