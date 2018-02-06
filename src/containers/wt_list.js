import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class Wtlist extends Component{
  renderWt(ctdata){
    const name = ctdata.city.name;
    const temps = ctdata.list.map(wt => wt.main.temp);
    const pressures = ctdata.list.map(wt => wt.main.pressure);
    const humidities = ctdata.list.map(wt => wt.main.humidity);
    const {lon, lat}=ctdata.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
          <td><Chart data={temps} color="orange" unit="K"/></td>
          <td><Chart data={pressures} color="blue" unit="hPa"/></td>
          <td><Chart data={humidities} color="green" unit="%"/></td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.wt.map(this.renderWt)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({wt}){
    return {wt};
}

//clear off typo
export default connect(mapStateToProps)(Wtlist);
