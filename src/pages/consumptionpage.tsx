import React, { useState } from 'react';
import { getPowerConsumption, getPid } from '../service/truncServicePId'; 


import '../Style/consumption.css'
import Grid from '@mui/joy/Grid';
const ConsumptionPage=()=>{

    const [pid, setPid] = useState("");
    const [powerConsumption, setPowerConsumption] = useState(0);
      const [appName, setAppName] = useState("");
    const [error, setError] = useState("");
    // This code defines a function that sets the pid state variable to the value of an input field when the user types in it.
    const handleInputChange = (event:any) => {
      setPid(event.target.value);
    };
    // Sets the state of appName to the value entered in the input field.
   const handleAppNameChange = (event:any) => {
        setAppName(event.target.value);
      };

    //   This code handles form submission and retrieves power consumption for the given PID, displaying any errors.
    const handleFormSubmit = async (event:any) => {
      event.preventDefault();
      try {
        const result = await getPowerConsumption(pid);
        setPowerConsumption(result);
        setError("");
      } catch (error:any) {
        setError(`Failed to get powerConsumption for PID: ${appName}`);
      }
    };

    // function for fetche the PID for the given application name and sets the state variables "pid" and "error" accordingly.
    const handleGetPidClick = async () => {
        try {
          const pid = await getPid(appName);
          setPid(pid);
          setError("");
        } catch (error:any) {
          console.error(error);
          setPid("");
          setError(`Failed to get PID for ${appName}. Error message: ${error.message}`);
        }
      };
  


    return (


      <div className="border-4  border-red-200 lg:border-red-500 py-4 px-6 lg:py-6 lg:px-8 w-screen h-screen bg-gray-900">
   <h1 className="text-red-500  text-3xl font-bold">Power Consumption Monitor</h1>
   <button className=" mb-3 mt-3 p-2 bg-purple-950 text-white font-medium" ><a href="https://drive.google.com/file/d/1ItjItZWEP2GZevJrHL9Gipg2nJkZ68N-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="">Application Instruction Video</a>
</button>
{/* container */}
<Grid container>
<Grid xs={2}>
      
      </Grid>
      
      <Grid xs={8}>
       

      <div className="texta h-200 w-200   border border-indigo-600 bg-red-800 mx-auto lg:w-full lg:border-2 lg:border-blue-600 ">
   <div>
{/* part of getting powerconsumption from PID */}

   <h2 className="texta text-center py-4 text-base text-gray-300" style={{ fontSize: "25x" }}>Fetch Power Consumption via PID</h2>

    </div>
 
   <div className='pb-5'>
   <Grid container>
      
      <Grid xs={1}>
       
      </Grid>
      <Grid xs={10}>

   {/* give the button and form */}
   <form onSubmit={handleFormSubmit}>
   <input type="number" id="pid" value={pid} onChange={handleInputChange}  className="h-full w-3/6 bg-gray-200 px-3 py-2 focus:outline-none focus:shadow-outline" placeholder="Enter Application PID here"/>
   <button className="h-full py-2 bg-purple-300 text-white font-medium" >Get Power Consumption</button>
</form>
      </Grid>
      <Grid xs={1}>
      
      </Grid>
    </Grid>
   </div>

  <div>
  <Grid container>
      
      <Grid xs={4}>
       
      </Grid>
      <Grid xs={4}>
   {/* give the button and form */}
   
 <div className="bg-gray-200 p-4">
  <h1 className="text-1xl font-bold text-indigo-900 mb-2">Application PowerConsumption</h1>
  <div className="flex items-center">
    
    <div className="w-1/2 text-left">
    <span className="text-1xl text-left text-red-500 font-bold">
  {error && <p>Error: {error}</p>}
  {powerConsumption > 0 && <p style={{ display: 'inline' }}>{powerConsumption} watts</p>}
</span>

    </div>
  </div>
</div>
   

      </Grid>
      <Grid xs={3}>
      
      </Grid>
    </Grid>
    
  </div>
{/* part of getting powerconsumption from PID */}


  <div>
  <p className="text-green-600 text-base mt-2">Unknown Application PID? Get it now.</p>

  {/* part of getting PID from Application name*/}
    <p className="texta text-center py-2 text-base text-gray-300 "style={{ fontSize: "20x" }}>Get PID from Application Name</p>
    </div>

    <div className='pb-5'>
   <Grid container>
      
      <Grid xs={1}>
       
      </Grid>
      <Grid xs={10}>
   {/* give the button and form */}
   
   <input type="text" value={appName} onChange={handleAppNameChange} className="h-full w-3/6 bg-gray-200 px-3 py-2 focus:outline-none focus:shadow-outline" placeholder="Enter Application Name"/>
   <button onClick={handleGetPidClick} className="h-full px-16 bg-purple-300 text-white font-medium">Get PID </button>

      </Grid>
      <Grid xs={1}>
      
      </Grid>
    </Grid>
    
   </div>
   <Grid container>
      
      <Grid xs={4}>
       
      </Grid>
      <Grid xs={4}>
   {/* give the button and form */}
   
 <div className="bg-gray-200 p-4 mb-12">
  <h1 className="text-1xl font-bold text-indigo-900 mb-2">Process Identifier(PID)</h1>
  <div className="flex items-center">

    <div className="w-1/2 text-center pl-2">
    <span className="text-1xl text-center text-yellow-600 font-bold">
    {pid && <p> {pid}</p>}
        {error && <p>{error}</p>}


    </span>

    </div>
  </div>
</div>
   

      </Grid>
      <Grid xs={3}>
      
      </Grid>
    </Grid>
     {/* part of getting PID from Application name*/}


</div>

      </Grid>
      <Grid xs={2}>
      
      </Grid>
    </Grid>


{/* container */}


    </div>
    
    
    );

}
export default ConsumptionPage