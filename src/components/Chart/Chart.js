import ChartBar from './ChartBar';
import './Chart.css';
const Chart=props=>{
    const datapointvalue=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalmax=Math.max(...datapointvalue);
    return (
    <div className="chart">
        {props.dataPoints.map(dataPoint=><ChartBar key={dataPoint.label} 
        value={dataPoint.value} maxValue={totalmax} label={dataPoint.label}/>)}
    </div>)

};
export  default Chart;