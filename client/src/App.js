

import { useRef, useState , useEffect} from 'react';
import './App.css';
 import { uploadFile } from './service/api.js';
function App() {

  const [file , setFile] = useState('');
 const [result,setResult] = useState('');


  const fileInputRef = useRef();




const logo = 'https://img.freepik.com/free-photo/young-employee_1194-2291.jpg';
 
useEffect(() => {
  const getImage = async () =>{
    if (file){
     const data = new FormData();  
     data.append("name",file.name);
     data.append("file",file);


     const response  = await uploadFile(data);
     setResult(response.path);
    }

  }
  getImage();
},[file])

const onUploadClick =() => {
  fileInputRef.current.click();
}

return (
    <div className='container'>
    <img  src= {logo} alt="image" />    
      <div className='wrapper'>
        <h1>Files ka shareit...!!!!</h1>
        <p>Here at our website you will find unique way of file sharing</p>
        <button onClick={() => onUploadClick() }>upload</button>

        <input   type="file"  
        ref= {fileInputRef}        
        style={{ display: 'none'}}   
        onChange={(e) => setFile(e.target.files[0])}      />

        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
