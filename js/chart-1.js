var reservationChart = function(){
  var options = {
       series: [{
       name: 'Monthly',
       data: [400, 400, 650, 500, 900, 750, 850]
     }, {
       name: 'Weekly',
       data: [350, 350, 420, 370, 500, 400, 550]
     }],
       chart: {
       height: 300,
       type: 'line',
   toolbar:{
     show:false
   }
     },
 colors:["#53CAFD","#E43BFF"],
     dataLabels: {
       enabled: false
     },
     stroke: {
   width:6,
   curve: 'smooth',
     },
 legend:{
   show:false
 },
 grid:{
   borderColor: 'rgba(255,255,255,0.10)',
   strokeDashArray: 0,
    xaxis: {
     lines: {
       show: true
     }
   },   
   yaxis: {
     lines: {
       show: true
     }
   }, 
 },
 markers:{
   strokeWidth: 6,
    hover: {
     size: 15,
   }
 },
 yaxis: {
   labels: {
   offsetX:-12,
   style: {
     colors: '#fff',
     fontSize: '13px',
     fontFamily: 'Poppins',
     fontWeight: 400
     
   }
   },
 },
     xaxis: {
       categories: ["SUN","MON","TUE","WED","THU","FRI","SAT"],
   labels:{
     
     style: {
     colors: '#fff',
     fontSize: '13px',
     fontFamily: 'Poppins',
     fontWeight: 400
     
   },
   },
   axisBorder: {
      show: false,
   },
     axisTicks: {
      show: true,
       borderType: 'solid',
       color: '#78909C',
       height: 6,
       width:6,
       offsetX: 0,
       offsetY: 0
     },
     },
 fill:{
   type:"solid",
   /* opacity:0.1 */
 },
     tooltip: {
       x: {
         format: 'dd/MM/yy HH:mm'
       },
     },
     };
     var dzchart = new ApexCharts(document.querySelector("#reservationChart"), options);
     dzchart.render();
    }