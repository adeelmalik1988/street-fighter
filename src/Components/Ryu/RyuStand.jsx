import React from 'react'
import ryu from './../../Images/ryu01.png';
import useWebAnimations from "@wellyshen/use-web-animations";



import classes from './RyuStand.module.css'


function RyuStand() {

   

    const { ref:ryuImg } =  useWebAnimations({
        keyframes:[
            { transform: 'translateX(0%)' },
            { transform: 'translateX(-100%)' }
        ],
        timing:{
            easing: 'steps(30, end)',
            duration: 2000,
            playbackRate: 1,
            iterations: Infinity,
        }
    }

    )


    return (
<div className={classes.box}>
        <div className={classes.ryu_div}>
            <img src={ryu} alt={'Street Fighter RYU'} className={classes.ryu_img} ref={ryuImg} />
        </div>
        </div>

    );
}

export default RyuStand;
