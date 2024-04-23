import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart,ArcElement} from 'chart.js'
import Labels from './Labels'
import { chart_Data } from '../calculate/Calculate'
import {default as api} from '../Store/apiSlice'


Chart.register(ArcElement)


  const config = {
    data : {
          datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
            borderRadius: 30,
            spacing:10
          }]
    },
    options : {
        cutout : 115
    }
  }

export default function Graph() {
  chart_Data()
  const { data, isFetching , isSuccess, isError } = api.useGetLabelsQuery()
  let graphData;

  console.log(data);

  if(isFetching){
      graphData = <div>Fetching</div>;
  }else if(isSuccess){
    chart_Data(data)
      // console.log(getLabels(data));
      graphData = <Doughnut {...chart_Data(data)}></Doughnut>

      // getLabels(data, 'type').map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>);
  }else if(isError){
      graphData = <div>Error</div>
  }
  return (
    <div className='flex justify-contents max-w-xs mx-auto'>
        <div className='item'>
            <div className='chart relative'>
              {graphData}
              {/* {obj.map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>)} */}
                {/* <Doughnut {...config}></Doughnut> */}
                <h3 className='mb-4 font-bold title'>Total
                    <span className='block text-2xl text-emerald-400'>${0}</span>
                </h3>
            </div>

            <div className='flex flex-col py-10 gap-4'>
                <Labels></Labels>


            </div>
        </div>
    </div>
  )
}

























// import React from 'react'
// import { Doughnut } from 'react-chartjs-2';
// import {Chart, ArcElement} from 'chart.js'
// import Labels from './Labels';
// import { chart_Data, getTotal } from '../calculate/Calculate'
// import {default as api} from '../Store/apiSlice'

// Chart.register(ArcElement);

// export default function Graph() {

//   const { data, isFetching , isSuccess, isError } = api.useGetLabelsQuery()
//   let graphData;

  

//   if(isFetching){
//     graphData = <div>Fetching</div>;
//   }else if(isSuccess){
//     graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
//   }else if(isError){
//     graphData = <div>Error</div>
//   }


//   return (
//     <div className="flex justify-content max-w-xs mx-auto">
//         <div className="item">
//             <div className="chart relative">
//                 {graphData}
//                 <h3 className='mb-4 font-bold title'>Total
//                     <span className='block text-3xl text-emerald-400'>${getTotal(data) ?? 0}</span>
//                 </h3>
//             </div>   

//             <div className="flex flex-col py-10 gap-4">
//                 {/* Labels */}
//                 <Labels></Labels>
//             </div> 
//         </div>
//     </div>
//   )
// }



















