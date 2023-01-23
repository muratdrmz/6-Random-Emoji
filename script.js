const btnEl=document.getElementById('btn');
const emojiNameEl=document.getElementById('emoji-name');
const urlApi =
  "https://emoji-api.com/emojis?access_key=144c06804630782f3204c22064aa4d516a3ef2e7";

const emoji=[];

async function getEmoji(){
   try {
    const response=await fetch(urlApi);
    const data=await response.json();
    console.log(data);
    for(let i=0; i<1500;i++){
     emoji.push = {
       emojiname: data[i].unicodeName,
       emojipic:data[i].character
     };
    }
   } catch (error) {
    console.log(error);
   }
   console.log(emoji);
}

btnEl.addEventListener('click',getEmoji)