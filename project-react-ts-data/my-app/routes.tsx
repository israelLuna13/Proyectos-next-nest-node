import {Route,Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import DataSalary from './src/views/DataSalary'
import Home from './src/views/Home'
import HomeLayout from './src/layout/HomeLayout'
import DataCompany from './src/views/DataCompany'
import FormFact from './src/views/FormFact'
export default function Router(){
   return (
     <BrowserRouter>
      <Routes>
       <Route element={<HomeLayout/>}>
         <Route path='/' element={<Home/>}/>
       </Route>
        <Route>
           
            <Route path='/data/salary' element={<DataSalary/>}/>
            <Route path='/data/company' element={<DataCompany/>}/>
            <Route path='/create-fact' element={<FormFact/>}/>
        </Route>
    </Routes>
        </BrowserRouter>
   
   )
}