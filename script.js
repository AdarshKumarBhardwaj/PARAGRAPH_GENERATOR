const text = [
    `Global warming is the long - term warming of the planet’s overall temperature.Though this warming trend has been going on for a long time, its pace has significantly increased in the last hundred years due to the burning of fossil fuels.As the human population has increased, so has the volume of fossil fuels burned.Fossil fuels include coal, oil, and natural gas, and burning them causes what is known as the “greenhouse effect” in Earth’s atmosphere.

    The greenhouse effect is when the sun’s rays penetrate the atmosphere, but when that heat is reflected off the surface cannot escape back into space.Gases produced by the burning of fossil fuels prevent the heat from leaving the atmosphere.These greenhouse gasses are carbon dioxide, chlorofluorocarbons, water vapor, methane, and nitrous oxide.The excess heat in the atmosphere has caused the average global temperature to rise overtime, otherwise known as global warming.`,
    
    `Global warming has presented another issue called climate change.Sometimes these phrases are used interchangeably, however, they are different.Climate change refers to changes in weather patterns and growing seasons around the world.It also refers to sea level rise caused by the expansion of warmer seas and melting ice sheets and glaciers.Global warming causes climate change, which poses a serious threat to life on Earth in the forms of widespread flooding and extreme weather.Scientists continue to study global warming and its impact on Earth.`,
     
    
`Write A Paragraph On Global Warming

Every students and kid should know about the effect of global warming. It is a threat to the entire world. Here are a few short and simple paragraphs on global warming for the kids and students. They will learn and know so many things about it from these paragraphs.


When there is not enough tree or plants to take our carbon dioxide, the environment get hot. So we have to handle this uprising level of carbon dioxide. We can do this only with tree plantation. We need to do some campaign and make people aware of the future. So that everyone can save themselves from the problem.

Global Warming: Paragraph (200 Words)
Greenhouse effect and deforestation has been the biggest reason behind global warming. The earth is a beautiful place for a human, but its temperature is being high day by day. This calls ‘Global Warming’. That’s mean the entire world is being warmer. It’s not a good thing for the future.`,



`
Write A Paragraph On Global Warming

Every students and kid should know about the effect of global warming. It is a threat to the entire world. Here are a few short and simple paragraphs on global warming for the kids and students. They will learn and know so many things about it from these paragraphs.


Global Warming: Paragraph (200 Words)
Greenhouse effect and deforestation has been the biggest reason behind global warming. The earth is a beautiful place for a human, but its temperature is being high day by day. This calls ‘Global Warming’. That’s mean the entire world is being warmer. It’s not a good thing for the future.

According to expert opinion, the world after a couple of hundred years will be unable to live in the level of carbon dioxide keeps increasing. Could you imagine, how threatening is this? Our future generation is in deep danger. We have to gift them a better and safer world.`,

`Its temperature is being high day by day. This calls ‘Global Warming’. That’s mean the entire world is being warmer. It’s not a good thing for the future. According to expert opinion, the world after a couple of hundred years will be unable to live in the level of carbon dioxide keeps increasing. Could you imagine, how threatening is this? Our future generation is in deep danger. We have to gift them a better and safer world.`,


`Write A Paragraph On Global Warming

Every students and kid should know about the effect of global warming. It is a threat to the entire world. Here are a few short and simple paragraphs on global warming for the kids and students. They will learn and know so many things about it from these paragraphs.


When there is not enough tree or plants to take our carbon dioxide, the environment get hot. So we have to handle this uprising level of carbon dioxide. We can do this only with tree plantation. We need to do some campaign and make people aware of the future. So that everyone can save themselves from the problem.

Global Warming: Paragraph (200 Words)
Greenhouse effect and deforestation has been the biggest reason behind global warming. The earth is a beautiful place for a human, but its temperature is being high day by day. This calls ‘Global Warming’. That’s mean the entire world is being warmer. It’s not a good thing for the future.

According to expert opinion, the world after a couple of hundred years will be unable to live in the level of carbon dioxide keeps increasing. Could you imagine, how threatening is this? Our future generation is in deep danger. We have to gift them a better and safer world.`
]


//it get the below function shuffle from stackoverflow website by writing array random sort


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  




const item=document.querySelector("#items")
const datacontainer=document.querySelector("#data")
const generate=()=>{
    
    console.log(item.value)
   if(isNaN(item.value) || item.value<0||item.value>4)
   {
     const randomindex=Math.floor(Math.random()*text.length)
     datacontainer.innerHTML=`<p>${text[randomindex]}</p>`
   }else{
         const localText=shuffle(text);
        const data=localText.slice(0,item.value)
        const paras=data.map(
            (d)=>{
                return `<p>${d}</p>`
            }
        )
        datacontainer.innerHTML=paras.join(" ");
   }
}