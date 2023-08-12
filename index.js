
var l = ["red", "green", "blue", "yellow"];
    // Generate a random color
    var  r=[];
    j=0;
function get_ready(){
  r=[];
  j=0;
  getready(1);
  
}
$(document).keydown(async function(e)
  { 
    if(e.key=="Enter")
    {
      $("h1").text("Round 1");
      getready(1);
    }
    
  });
async function getready(n)
{
     for(var i=0;i<n;i++)
      {
        var rand = l[Math.floor(Math.random() * 4)]; 
     
        var d = new Audio();
        d.src = "sounds/"+rand+".mp3"; // Set the audio source to blue.mp3
        d.play(); // Play the audio
        $("." + rand).addClass("pressed");
        r.push(rand);
        await sleep(1);
        $("." + rand).removeClass("pressed");  
        await sleep(0.1);
      }
}
  //console.log(r);
  async function sleep(sec)
  {
      return new Promise(function(resolve) { setTimeout(resolve,sec*1000)});
  }
  $(".btn").click( 
  async function()
 {
    var v=this.classList[1];
    $("."+v).addClass("pressed");
    var d=new Audio();
    d.src="sounds/"+v+".mp3";
    d.play();
    await sleep(0.2);
    $("."+v).removeClass("pressed");
    if (v!=r[j]){
    //alert("game over");
    $("h1").text("Game over");
    $("h1").css("font-size","8rem");
    d.src="sounds/game-over.mp3";
    d.play();
    d=0;
    }
    else{
    j++;
    if(j==r.length)
    {
      $("h1").text("Round "+(j+1));
      var o=r.length;
      r=[];
      j=0;
      await sleep(0.6);
      getready(o+1);

    }
        }
    console.log(this.classList[1]);

 });
$(".reset").click(()=>{get_ready();
  $("h1").text("Round 1");
  $("h1").css("font-size","3rem");
});
 //$(".btn").click(function(){$("h1").fadeToggle();
//});
$(document).ready(() => {
  const lheight = $('.element').height();
  setInterval(() => {
      $('h1').fadeIn(700);
      $('h1').fadeOut(700);

      // The following code keeps the 
      // height of the div intact
      if ($('.element').height() !== 0) {
          $('.element').css('height', `${lheight}px`);
      }
  }, 500);
});
