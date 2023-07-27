let allData = ['Freelancer','Web Developer','Frontend','Backend']
let imgSolo = document.querySelectorAll('.imgSolo')
let Line = document.getElementById('Line')
let deleteText = document.getElementById('deleteText')
let secondText = document.querySelector('.secondText')
    let j=0, i=0, isPause = false
   function writeWord() {setInterval(()=>{
        for(let i =0; i<imgSolo.length;i++){imgSolo[i].classList.remove('show')}
        for(let i =0; i<imgSolo.length;i++){imgSolo[i].classList.remove('hide')}
        if(!isPause==true){
            deleteText.style.background= 'none'
            currentWord = allData[j].split('')
            secondText.textContent += currentWord[i]
            imgSolo[j].classList.add('show')
            i++
              if(i >currentWord.length-1){
                isPause = true
                imgSolo[j].classList.add('hide') 
                setTimeout(()=>{deleteText.style.background = 'rgba(31, 109, 217, 0.87)'},100)
                setTimeout(()=>{isPause=false; secondText.textContent = '';},1000)
                j++; i=0            
            }
            if (j>=allData.length){j=0;}     
        }
    },300)
}
writeWord()


   
        
                

