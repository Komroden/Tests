
import React, {useState, useEffect} from 'react';

import ReactEcharts from 'echarts-for-react';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useHistory} from "react-router-dom";






export const Area = () => {

    const [countryesAmericas, setCountryesAmericas] = useState([]);
    const [populationAmericas, setPopulationAmericas] = useState([]);
    const [countryesEuropes, setCountryesEuropes] = useState([]);
    const [populationEuropes, setPopulationEuropes] = useState([]);
    const [countryesAsia, setCountryesAsia] = useState([]);
    const [populationAsia, setPopulationAsia] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://restcountries.com/v3.1/all',
                
            );

            setCountryesAmericas(result.data.filter(country => country.region === 'Americas').map(country => country.name.common));
            setPopulationAmericas(result.data.filter(country => country.region === 'Americas').map(country => country.population).filter(number=>number<1000000&&number>100000));
            setCountryesEuropes(result.data.filter(country => country.region === 'Europe').map(country => country.name.common));
            setPopulationEuropes(result.data.filter(country => country.region === 'Europe').map(country => country.population).filter(number=>number<1000000&&number>100000));
            setCountryesAsia(result.data.filter(country => country.region === 'Europe').map(country => country.name.common));
            setPopulationAsia(result.data.filter(country => country.region === 'Asia').map(country => country.population).filter(number=>number<1000000&&number>100000));
            
            
        };
        fetchData();
    }, []);
    
    console.log(populationAmericas)
    return (       
<div>

<Grid container >
  <Grid item xs={4}  >
  <ReactEcharts style={{
                  height: '91vh'
                  
                }}  option={{
      
       backgroundColor: '#2c343c',
       title: {
        text: 'America',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 1000000,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      
      series: [ 
        
        
        {
          name: 'Population',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
              
            { value: populationAmericas[0], name: countryesAmericas[0] },
            { value: populationAmericas[1], name: countryesAmericas[1] },
            { value: populationAmericas[2], name: countryesAmericas[2] },
            { value: populationAmericas[3], name: countryesAmericas[3] },
            { value: populationAmericas[4], name: countryesAmericas[4] }
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          label: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]   
      
       
}}>
        
    </ReactEcharts>
  </Grid>
  <Grid item xs={4}  >
  <ReactEcharts style={{
      height: '91vh'
                  
                }}  option={{
       backgroundColor: '#2c343c',
       title: {
        text: 'Europe',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 1000000,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        
        {
          name: 'Population',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: populationEuropes[0], name: countryesEuropes[0] },
            { value: populationEuropes[1], name: countryesEuropes[1] },
            { value: populationEuropes[2], name: countryesEuropes[2] },
            { value: populationEuropes[3], name: countryesEuropes[3] },
            { value: populationEuropes[4], name: countryesEuropes[4] }
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          label: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]   
      

        
}}>

    </ReactEcharts>
      <Stack  spacing={2}>
          <Pagination   color="primary" count={2} variant="outlined" style={{
              position:'absolute',
              top: '87vh',
              left: '43%'

          }} />

      </Stack>
  </Grid>
  <Grid item xs={4} >
  <ReactEcharts style={{
      height: '91vh'
                  
                }}  option={{
       backgroundColor: '#2c343c',
       title: {
        text: 'Asia',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 1000000,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: 'Population',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: populationAsia[0], name: countryesAsia[0] },
            { value: populationAsia[1], name: countryesAsia[1] },
            { value: populationAsia[2], name: countryesAsia[2] },
            { value: populationAsia[3], name: countryesAsia[3] },
            { value: populationAsia[4], name: countryesAsia[4] }
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          label: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]   
      

        
}}>

    </ReactEcharts>

  </Grid>
  
</Grid>

</div>
    )};