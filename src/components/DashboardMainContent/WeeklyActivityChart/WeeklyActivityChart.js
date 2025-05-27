import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Mon', appointments: 2 },
  { day: 'Tues', appointments: 5 },
  { day: 'Wed', appointments: 3 },
  { day: 'Thurs', appointments: 4 },
  { day: 'Fri', appointments: 6 },
  { day: 'Sat', appointments: 2 },
  { day: 'Sun', appointments: 3 },
];

function WeeklyActivityChart() {
  return (
    <div style={{
      background: '#f8fbff',
      padding: '6px 10px',
      borderRadius: '12px',
      height:'100%',
      width:'85%',
       marginLeft:'50px'

    }}>

    
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginBottom: '10px', marginLeft:'10px'
      }}>
        <h5 style={{ margin: 0 }}>Activity</h5>
        <p style={{ fontSize: '14px', color: '#666' }}>3 appointments this week</p>
      </div>
      <ResponsiveContainer className="mb-5" width="100%" height={90}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis hide />
          <Tooltip className="mb-3" />
          <Bar dataKey="appointments" fill="#00c6ff" radius={[6, 6, 0, 0]} barSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyActivityChart;
