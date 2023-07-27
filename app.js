let allData = ['Freelancer','Web Developer','Frontend','Backend']
let urlsImg = 
[
    'https://assets.vccircle.com/uploads/2017/11/cloud-computing-2001090_1280.jpg'
    ,'https://www.alfatechnologies.in/assets/img/alfa/services/IT_INFRASTRUCTURE_SOLUTIONS.jpg'
    ,'https://www.intelystelecom.com/wp-content/uploads/2020/11/Intelys-Telecom-Transform-your-Infrastructure-900x500.jpg'
    ,'https://www.netcov.com/wp-content/pubfiles/2020/09/shutterstock_1664592358.jpg'
]
let imgSolo = document.querySelectorAll('.imgSolo')
let blockWithText = document.querySelector('.blockWithText')
let Line = document.getElementById('Line')
let deleteText = document.getElementById('deleteText')
let secondText = document.querySelector('.secondText')
    let j=0, i=0, isPause = false
   function writeWord() {setInterval(()=>{
        // for(let i =0; i<imgSolo.length;i++){imgSolo[i].classList.remove('show')}
        
        for(let i =0; i<imgSolo.length;i++){imgSolo[i].classList.remove('hide')}
        if(!isPause==true){
            blockWithText.style.background = 'none'
            deleteText.style.background= 'none'
            currentWord = allData[j].split('')
            secondText.textContent += currentWord[i]
            // imgSolo[j].classList.add('show')
            blockWithText.style.background = `url(${urlsImg[j]})`
            i++
            
              if(i >currentWord.length-1){
                isPause = true
                // imgSolo[j].classList.add('hide') 
                setTimeout(()=>{deleteText.style.background = 'rgba(31, 109, 217, 0.87)'},100)
                setTimeout(()=>{isPause=false; secondText.textContent = '';},1000)
                j++; i=0            
            }
            if (j>=allData.length){j=0;}     
        }
    },300)
}
writeWord()


   
        
                

