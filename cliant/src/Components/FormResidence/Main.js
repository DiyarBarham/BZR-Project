import React from 'react'
import ReactDOM from 'react-dom'
import MultiStep from 'react-multistep'
import './css/custom.css'
import './css/normilize.css'
import './css/skeleton.css'
import StepOne from './StepOne'
import StepTwo from './StepTow'
import StepThree from './StepThree'
import StepFour from './StepFour'

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
  { component: <StepFour /> }
]

const prevStyle = {'background': '#33c3f0', 'border-width': '2px'}
const nextStyle = {'background': '#33c3f0',  'border-width': '2px'}

const Main = () => (
  <div className='container'>
    <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
    <div className='container app-footer'>
      <h6>Press 'Enter' or click on progress bar for next step.</h6>
      Code is on{' '}
      <a href='https://github.com/Srdjan/react-multistep' target='_blank'>
        github
      </a>
    </div>
  </div>
)

ReactDOM.render(<Main />, document.getElementById('app'))