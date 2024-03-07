import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  //ARROW FUNCTION TRY
  // const handleColorChange = (newColor) => {
  //   setColor(newColor);
  // };

  //NORMAL FUNCTION TRY
  const handleColorChange= function(newColor){
    setColor(newColor);
  }
  return (
    <div className=" fixed inset-0 min-h-screen w-full duration-200 rounded " 
    style={{backgroundColor: color}}>
      <div className=" flex-col items-center justify-center h-full rounded">
        <h1 className="bg-yellow-200">Select a Color</h1>
        <div className="flex flex-wrap justify-center mt-4">
          <button className="m-2 p-2 bg-red-500 text-white rounded-md" onClick={() => handleColorChange("red")}>Red</button>
          <button className="m-2 p-2 bg-blue-500 text-white rounded-md" onClick={() => handleColorChange("blue")}>Blue</button>
          <button className="m-2 p-2 bg-green-500 text-white rounded-md" onClick={() => handleColorChange("green")}>Green</button>
          <button className="m-2 p-2 bg-yellow-500 text-black rounded-md" onClick={() => handleColorChange("yellow")}>Yellow</button>
          <button className="m-2 p-2 bg-orange-500 text-white rounded-md" onClick={() => handleColorChange("orange")}>Orange</button>
          <button className="m-2 p-2 bg-purple-500 text-white rounded-md" onClick={() => handleColorChange("purple")}>Purple</button>
          <button className="m-2 p-2 bg-pink-500 text-white rounded-md" onClick={() => handleColorChange("pink")}>Pink</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
