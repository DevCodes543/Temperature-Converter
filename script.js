// __________Icon_Animation_________
const therm = () => {
    let therm_icon = document.getElementById('therm-icon');
    therm_icon.innerHTML = "&#xf2cb";
    setTimeout(() => {
        therm_icon.innerHTML = "&#xf2ca";
        therm_icon.style.color = "#f0bb4a";
    }, 1000);
    setTimeout(() => {
        therm_icon.innerHTML = "&#xf2c9";
        therm_icon.style.color = "#fda128";
    }, 2000);
    setTimeout(() => {
        therm_icon.innerHTML = "&#xf2c8";
        therm_icon.style.color = "#fd6b17";
    }, 3000);
    setTimeout(() => {
        therm_icon.innerHTML = "&#xf2c7";
        therm_icon.style.color = "#f54433";

    }, 4000);
    therm_icon.style.color = "#facd51";
};
therm();
setInterval(therm, 5000)

// _______Convert Temperature_______

function degC_to_F(ce) {
    let deg_F = (9 * ce / 5) + 32;
    if(!Number.isInteger(deg_F)){    //if not an integer
       deg_F = deg_F.toFixed(4);
    }
    console.log(`${ce} C = ${deg_F} F`);
    return deg_F;
}
// degC_to_F();
// K = C + 273.15 (or) C = K – 273.15

function degC_to_K(ce){
    let deg_K= Number(ce)  + Number(273.15)
    if(!Number.isInteger(deg_K)){    //if not an integer
        deg_K = deg_K.toFixed(4);
     }
    console.log(`${ce} C = ${deg_K} K`);
    return deg_K;
}

function degK_to_C(ke){
    let deg_C=ke - 273.15
    if(!Number.isInteger(deg_C)){    //if not an integer
        deg_C = deg_C.toFixed(4);
     }
    console.log(`${ke} C = ${deg_C} K`);
    return deg_C;
}

function degF_to_C(fa) {
    let deg_C = (fa - 32) * 5 / 9;
    if(!Number.isInteger(deg_C)){
        deg_C = deg_C.toFixed(4);
    }
    console.log(`${fa} F = ${deg_C} C`);
    return deg_C;
}

// degF_to_C();

function degF_to_K(fa){
    let ce=degF_to_C(fa);
    let deg_K= Number(ce)  + Number(273.15)
    if(!Number.isInteger(deg_K)){    //if not an integer
        deg_K = deg_K.toFixed(4);
    }   
    console.log(`${fa} C = ${deg_K} K`);

    return deg_K;
}

function degK_to_F(ke){
    let ce=degK_to_C(ke);
    let deg_F=degC_to_F(ce);
    // if(!Number.isInteger(deg_F)){    //if not an integer
    //     deg_F = deg_F.toFixed(4);
    //  }
     console.log(`${ke} C = ${deg_F} F`);    
    return deg_F;
}

function convert_1(){
    // let inp_temp_1=0;
    let inp_temp_1=document.getElementById('input_temp_1').value;
    let inp_temp_2=document.getElementById('input_temp_2').value;
    let tempSelec_1=document.getElementById('opt-1').value;
    let tempSelec_2=document.getElementById('opt-2').value;

    console.log(`${inp_temp_1} and ${tempSelec_1}`);
    // && 
    if(tempSelec_1===tempSelec_2){
        result_2_=inp_temp_1;
        document.getElementById('input_temp_2').value=result_2_;

        console.log(` fa to C ${result_2_}`);

    }
    if( tempSelec_1==='Celsius' &&  tempSelec_2==='Fahrenheit' ){
        let result_2_fa=degC_to_F(inp_temp_1);
        document.getElementById('input_temp_2').value=result_2_fa;

        console.log(`c to f ${result_2_fa}`);

    }
    // 
    if( tempSelec_1==='Celsius' && tempSelec_2==='Kelvin' ){
        result_2_ke=degC_to_K(inp_temp_1);
        document.getElementById('input_temp_2').value=result_2_ke;

        console.log(`c to K ${result_2_ke}`);

    }
    if( tempSelec_1=='Fahrenheit' && tempSelec_2=='Kelvin' ){
        result_2_ke=degF_to_K(inp_temp_1);
        document.getElementById('input_temp_2').value=result_2_ke;

        console.log(`f to ke ${result_2_ke}`);
    }

    if( tempSelec_1=='Fahrenheit' && tempSelec_2=='Celsius' ){
        result_2_ce=degF_to_C(inp_temp_1);
        document.getElementById('input_temp_2').value=result_2_ce;

        console.log(`f to ke ${result_2_ce}`);
    }

    if( tempSelec_1=='Kelvin' && tempSelec_2=='Celsius' ){
        result_2_ce=degK_to_C(inp_temp_1);
        document.getElementById('input_temp_2').value=result_2_ce;

        console.log(`f to ke ${result_2_ce}`);

    }

    if( tempSelec_1=='Kelvin' && tempSelec_2=='Fahrenheit' ){
        result_2_fa=degK_to_F(inp_temp_1);
        document.getElementById('input_temp_2').value=result_2_fa;

        console.log(`f to ke ${result_2_ce}`);

    }

}



function convert_2(){
    // let inp_temp_1=0;
    let inp_temp_1=document.getElementById('input_temp_1').value;
    let inp_temp_2=document.getElementById('input_temp_2').value;
    let tempSelec_1=document.getElementById('opt-1').value;
    let tempSelec_2=document.getElementById('opt-2').value;

    console.log(`${inp_temp_2} and ${tempSelec_2}`);

    if(tempSelec_1===tempSelec_2){
        result_1_=inp_temp_2;
        document.getElementById('input_temp_1').value=result_1_;

        console.log(` fa to C ${result_1_}`);

    }
    if( tempSelec_1==='Celsius' &&  tempSelec_2==='Fahrenheit' ){
        result_1_ce=degF_to_C(inp_temp_2);
        document.getElementById('input_temp_1').value=result_1_ce;

        console.log(` fa to C ${result_1_ce}`);

    }
    
    if( tempSelec_1==='Celsius' && tempSelec_2==='Kelvin' ){
        result_1_ce=degK_to_C(inp_temp_2);
        document.getElementById('input_temp_1').value=result_1_ce;

        console.log(` K to C ${result_1_ce}`);
    }
    if( tempSelec_1=='Fahrenheit' && tempSelec_2=='Kelvin' ){
        
        result_1_fa=degK_to_F(inp_temp_2);
        document.getElementById('input_temp_1').value=result_1_fa;
        
        console.log(` K to F ${result_1_fa}`);
    }

    if( tempSelec_1=='Fahrenheit' && tempSelec_2=='Celsius' ){
        result_1_fa=degC_to_F(inp_temp_2);
        document.getElementById('input_temp_1').value=result_1_fa;
        
        console.log(` K to F ${result_1_fa}`);
    }
    if( tempSelec_1=='Kelvin' && tempSelec_2=='Celsius' ){        
        result_1_ke=degC_to_K(inp_temp_2);
        document.getElementById('input_temp_1').value=result_1_ke;
        
        console.log(` K to F ${result_1_ke}`);
    }
    if( tempSelec_1=='Kelvin' && tempSelec_2=='Fahrenheit' ){
        result_1_ke=degF_to_K(inp_temp_2);
        document.getElementById('input_temp_1').value=result_1_ke;
        
        console.log(` K to F ${result_1_ke}`);
    }

}

window.addEventListener('resize', ()=>{
    if(window.innerWidth<800){
        document.getElementById('foot-span').innerHTML='| <br>';
    }
    else{
        document.getElementById('foot-span').innerHTML=' |';

    }   
})









// function convert_2(){
//     let inp_temp_1=document.getElementById('input_temp_1').value;
//     let inp_temp_2=document.getElementById('input_temp_2').value;
//     let tempSelec_1=document.getElementById('opt-1').value;
//     let tempSelec_2=document.getElementById('opt-2').value;

//     console.log(`${inp_temp_1} and ${tempSelec_1}`);

//     if( tempSelec_1=='Celsius' && tempSelec_2=='Fahrenheit' ){
//         result_2_fa=degC_to_F(inp_temp_1);
//         document.getElementById('input_temp_2').value=result_2_fa;

//         console.log(`c to f ${result_2_ke}`);

//         result_1_ce=degF_to_C(inp_temp_2);
//         document.getElementById('input_temp_1').value=result_1_ce;

//         console.log(` fa to C ${result_1_ce}`);

//         // console.log();
//     }
//     // if( tempSelec_1=='Celsius' && tempSelec_2=='Kelvin' ){
//     //     result_2_ke=degC_to_K(inp_temp_1);
//     //     document.getElementById('input_temp_2').value=result_2_ke;

//     //     console.log(`c to K ${result_2_ke}`);

//     //     result_1_ce=degK_to_C(inp_temp_2);
//     //     document.getElementById('input_temp_1').value=result_1_ce;

//     //     console.log(` K to C ${result_1_ce}`);
//     // }
//     // if( tempSelec_1=='Fahrenheit' && tempSelec_2=='Kelvin' ){
//     //     result_2_ke=degF_to_K(inp_temp_1);
//     //     document.getElementById('input_temp_2').value=result_2_ke;

//     //     console.log(`f to ke ${result_2_ke}`);
        
//     //     result_1_fa=degK_to_fa(inp_temp_2);
//     //     document.getElementById('input_temp_1').value=result_1_fa;
        
//     //     console.log(` K to F ${result_1_fa}`);
//     //     // console.log();
//     // }

// }






