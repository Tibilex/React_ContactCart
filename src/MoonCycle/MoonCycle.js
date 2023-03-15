import './MoonCycle.css';
import React, {useState, useEffect} from "react";

function MoonCycle() {

    const[moonNow,setMoonNow] = useState();
    const[moonInput ,setMoonInDate] = useState();

    useEffect(() => {
        SendRequest2('GET','http://localhost:8080/moonCycle')
        .then(data=>setMoonNow('Сейчас: '+ data))
        .catch(err=>console.log(err));
    }, []);
    
    function SendRequest2(method,url,body = null){
        return fetch(url,{
            method: method
        }).then(response => {
            return response.text();
        })
    }

    function PostMoon(){
        let inp = document.querySelector(".input").value;
    
        console.log(inp);
        if( inp != "" ){
            const body ={
                date: inp,
            }
            SendRequest2('POST','http://localhost:8080/setDate?localDate=' + inp)
            .then(data=>setMoonInDate('В выбраный день: ' + data))
            .catch(err=>console.log(err));
        }
        
    }
    return (
     <div className='container'>
        <div class="login_form">
            <h3><span>Л</span>унные фазы:</h3>
            <p>{moonNow}</p>
            <div class="input_box">
                <input class="input" type={'date'}/>
                 
            </div>
            <p>{moonInput}</p>  
            
            <button type="submit" class="enter-button" onClick={PostMoon}>Enter</button> 
        </div>
     </div>
     
    );
  }
  
  export default MoonCycle;