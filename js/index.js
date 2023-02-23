$(document).ready(function () {
  $(".list-menu__title").on("click", function () {
    $(this).toggleClass('active-on');
    $(this).next('.sub-dropdown-menu').slideToggle();
  });
});


//ApexCharts
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
    toolbar: {
      show: false
    }
  },
  colors: ["#53CAFD", "#E43BFF"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 6,
    curve: 'smooth',
  },
  legend: {
    show: false,
  },
  grid: {
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
  markers: {
    strokeWidth: 6,
    hover: {
      size: 15,
    }
  },
  yaxis: {
    labels: {
      offsetX: -12,
      style: {
        colors: '#fff',
        fontSize: '13px',
        fontFamily: 'Poppins',
        fontWeight: 400

      }
    },
  },
  xaxis: {
    categories: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    labels: {

      style: {
        colors: '#fff',
        fontSize: '13px',
        fontFamily: 'Poppins',
        fontWeight: 400

      },
    },
    axisBorder: {
      show:false,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#78909C',
      height: 6,
      width: 6,
      offsetX: 0,
      offsetY: 0
    },
  },
  fill: {
    type: "solid",
    // /* opacity:0.1 */
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

//lineChart
var options = {
  series: [90, 68, 85],
  chart: {
  type: 'donut',
  height:250,
  },
 dataLabels:{
   enabled: false
 },
 stroke: {
       width: 0,
 },  
  
  colors:['#DD3CFF', '#FFE27A', '#53CAFD'],
  legend: {
    position: 'bottom',
    show:false
    },
  responsive: [{
   breakpoint: 1490,
   options: {
     chart: {
       width:100,
       height:150
     },
   },
   breakpoint: 1100,
   options: {
     chart: {
       height:150
     },
   }
  }]
  };

var chart = new ApexCharts(document.querySelector("#pinChart"), options);
chart.render();


var options  = {
  series: [
    {
      name: 'Projects',
       data: [31, 40, 28]
    }, 
    {
      name: 'Projects',
       data: [11, 32, 45]
    }, 
    
  ],
  chart: {
  type: 'bar',
  height: 300,
        
    toolbar: {
      show: false,
    },
  },

plotOptions: {
  bar: {
  horizontal: false,
  endingShape:'rounded',
  columnWidth: '45%',
  borderRadius: 8,
  
  },
},
colors:['#816CFF', '#77248B'],
dataLabels: {
  enabled: false,
},
markers: {
  shape: "circle",
},
legend: {
  show: false,
  fontSize: '12px',
  labels: {
    colors: '#000000',
    
    },
  markers: {
  width: 18,
  height: 18,
  strokeWidth: 0,
  strokeColor: '#fff',
  fillColors: undefined,
  radius: 15,	
  }
},
stroke: {
  show: true,
  width: 5,
  curve: 'stepline',
  colors: ['transparent'],
  lineCap: 'butt',
},
grid: {
  borderColor: 'rgba(255,255,255,0.10)',
},
xaxis: {
  categories: ['Sun', 'Mon', 'Tue'],
  labels: {
   style: {
    colors: '#fff',
    fontSize: '13px',
    fontFamily: 'poppins',
    fontWeight: 100,
    cssClass: 'apexcharts-xaxis-label',
  },
  
  },
  crosshairs: {
  show: false,
  },
   axisBorder: {
      show: false,
   },
    axisTicks: {
    
    show: false,
  }
},
yaxis: {
  labels: {
    offsetX:-16,
     style: {
      colors: '#fff',
      fontSize: '13px',
       fontFamily: 'poppins',
      fontWeight: 100,
      cssClass: 'apexcharts-xaxis-label',
    },
  },
},
fill: {
  opacity: 1,
  colors:['#53CAFD', '#E43BFF'],
},
tooltip: {
  y: {
  formatter: function (val) {
    return "$ " + val + " thousands"
  }
  }
},
responsive: [{
  breakpoint: 1400,
  options: {
    chart:{
      height:200
    },
  },
 }]	
};


var chart = new ApexCharts(document.querySelector("#lineChart"), options);
chart.render();

var option1 = {
  series: [{
  type: 'liquidFill',
  data: [0.6, 0.5, 0.4],
   radius: '80%',
  color: ['#f33923','#e58b25','#ac235c'],
  backgroundStyle: {
    borderWidth: 0,
    color: 'rgba(255,255,255,0)',
    shadowBlur: 0
  },
  itemStyle: {
    normal: {
      shadowBlur: 5,
      shadowColor: 'rgba(0, 0, 0, .5)'
    }
  },
  outline: {
    borderDistance: 3,
    itemStyle: {
      borderWidth: 5,
      borderColor: '#ac235c',
      shadowBlur: 0,
    }
  },
  label: {
    normal: {
      fontSize: 20
    }
  } 
}]
};

var chart = new ApexCharts(document.querySelector("#Balance"), options);
chart.render();
//

//header
$(window).scroll(function(){
  if($(this).scrollTop() > 133){
      $(".navbar").addClass('fixed-header');
  }
  else {
      $(".navbar").removeClass('fixed-header');
  }
});

//side-bar
$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $('.nav-header').toggleClass('sidebar');
  });
});
