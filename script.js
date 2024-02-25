console.log("welcome to spotify");

let songindex=0;
let audioelement=new Audio('songs.1.mp3')
let masterplay=document.querySelector("#masterplay");
let myprogressbar=document.querySelector("#myprogressbar");
let mastersongname=document.querySelector("#mastersongname")

let songslist=[
    {songName:"HUSN" ,filepath:"songs.1.mp3"},
    {songName:"UNTIL I FOUND YOU" ,filepath:"songs.2.mp3"},
    {songName:"TUNE JO NA KAHAN" ,filepath:"songs.3.mp3"},
    {songName:"BAARISHEIN" ,filepath:"songs.4.mp3"},
    {songName:"HEERIYE" ,filepath:"songs.5.mp3"},
    {songName:"NIGHT CHANGES" ,filepath:"songs.6.mp3"},
    {songName:"TU HAI KAHAN" ,filepath:"songs.7.mp3"},

]
masterplay.addEventListener('click',()=>{
    if(audioelement.paused|| audioelement.currentTime<=0){
       audioelement.play()
       masterplay.classList.remove("fa-circle-play")
       masterplay.classList.add("fa-circle-pause")
    }
    else{
       audioelement.pause()
       masterplay.classList.remove("fa-circle-pause")
       masterplay.classList.add("fa-circle-play")
    }
});
audioelement.addEventListener("timeupdate",()=>{
   progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
   myprogressbar.value= progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
    }


Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=> {
    element.addEventListener("click",(e)=>{
        makeallplays();
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src=`songs.${songindex+1}.mp3`
        mastersongname.innerText=songslist[songindex].songName;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.querySelector("#next").addEventListener("click",()=>{
    if(songindex>=9){
        songindex=0
    }
    else{
        songindex+= 1;
    }
    audioelement.src=`songs.${songindex+1}.mp3`
    mastersongname.innerText=songslist[songindex].songName;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.querySelector("#previous").addEventListener("click",()=>{
    if(songindex<=0){
        songindex=0
    }
    else{
        songindex-=1
    }
    audioelement.src=`songs.${songindex+1}.mp3`
    mastersongname.innerText=songslist[songindex].songName;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})