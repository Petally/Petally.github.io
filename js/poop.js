		function sayEntity()	{
		
document.getElementById("pp1").innerHTML = "Im always here.";
		
		}
	
  		function sayEntity1()	{
		
document.getElementById("pp2").innerHTML = "Youll never escape.";
		
		}
		
    		function timedEntity()
		
		{
		
		var greeting = setTimeout(sayEntity, 26000);
		
		}
    
		function timedEntity1()
		
		{
		
		var greeting = setTimeout(sayEntity1, 25000);
		
		}
		
		
		timeGreeting();
