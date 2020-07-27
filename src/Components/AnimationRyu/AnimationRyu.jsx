import React, { useState, useEffect } from 'react';
import classes from './AnimationRyu.module.css'
import Ryu from './../Ryu/Ryu';
import RyuStand from './../Ryu/RyuStand';
import RyuKick from './../Ryu/RyuKick';
import RyuHook from './../Ryu/RyuHook';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/custom.css';



function AnimationRyu() {

    const [ele, setele] = useState(null)


    useEffect(() => {

            setele(<RyuStand />);
    
        console.log('useEffect called')

    

    }, [])




    return (
        <div >
            
            <div className={classes.box} >


                {ele}


            </div>

            
            <button onClick={() => setele(<RyuHook />)} type="button" className="btn btn-outline-primary" >HOOK</button>
            <button onClick={() => setele(<RyuStand />)} type="button" className="btn btn-outline-success" >EASE</button>
            <button onClick={() => setele(<Ryu />)} type="button" className="btn btn-outline-danger" >POWER</button>
            <button onClick={() => setele(<RyuKick />)} type="button" className="btn btn-outline-warning" >KICK</button>
            


        </div>
    );
}

export default AnimationRyu;
