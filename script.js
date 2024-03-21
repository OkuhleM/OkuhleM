const bars = document.querySelectorAll('.progress');

const convertToArray = Array.from(bars);


convertToArray.forEach(item => {
    let value = item.id;
    let counter = 0;
    let interval = setInterval(()=>{
        item.style.width = counter + "%";

        if(counter == value){
            clearInterval(interval);

        }
        counter++;
    },8);
});

