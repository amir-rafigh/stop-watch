window.onload = function(){
    const minute = document.getElementById('minute');
    const second =document.getElementById("second");
    const milisecond = document.getElementById('milisecond');
    const button = document.querySelectorAll('button')
    var interval;
    let min = 0;
    let sec = 0;
    let ms = 0;

   button[0].onclick = function(){
    
    interval = setInterval(starttimer , 10)
   }   
   
   
   button[1].onclick = function(){
    clearInterval(interval)
      
    
    }    
    
    button[2].onclick = function(){        
        min = '00';
        sec = '00';
        ms = '00';
        minute.innerHTML = min;
        second.innerHTML = sec;
        milisecond.innerHTML = ms;

        
    }
    
    function starttimer(){
        
     ms++
     if(ms<=9){
        milisecond.innerHTML = "0" + ms;
     }
     if(ms>9){
        milisecond.innerHTML = ms;
     }
     if(ms>99){
        sec++;
        second.innerHTML = "0" + sec;
        ms = 0
        milisecond.innerHTML = "0" + 0
        
     }
     if(sec>9){
        second.innerHTML = sec
     }
     if(sec>=60){
        min++;
        minute.innerHTML= "0" + min;
        sec = 0;
        second.innerHTML = "0" + 0
     }
     if(min>60){
        min=0;
        sec=0;
        ms=0;
        minute.innerHTML = min;
        second.innerHTML = sec;
        milisecond.innerHTML= ms
     }

  
    }
    
}

