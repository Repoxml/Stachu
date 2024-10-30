const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


// obramowka
ctx.beginPath();           
ctx.moveTo(20,20);         
ctx.lineTo(20, 150);       
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(20,20);         
ctx.lineTo(150, 20);       
ctx.stroke();              

ctx.beginPath();           
ctx.moveTo(150,20);         
ctx.lineTo(150, 150);       
ctx.stroke();  

ctx.beginPath();           
ctx.moveTo(20,150);         
ctx.lineTo(150, 150);       
ctx.stroke(); 
//tarcza
ctx.beginPath();
ctx.arc(85, 85, 65, 0, 4 * Math.PI);
ctx.stroke();
//kolka w rogach
ctx.beginPath();
ctx.arc(31, 30, 11, 0, 4 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(139, 30, 11, 0, 4 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(139, 139, 11, 0, 4 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(31, 139, 11, 0, 4 * Math.PI);
ctx.stroke();
//liczby
ctx.font = "20px Arial";
ctx.strokeText("12", 75, 38);
ctx.strokeText("1", 110, 47);
ctx.strokeText("2", 125, 63);
ctx.strokeText("3", 135, 85);
ctx.strokeText("4", 130, 110);
ctx.strokeText("5", 110, 135);
ctx.strokeText("6", 85, 145);
ctx.strokeText("7", 55, 137);
ctx.strokeText("8", 35, 115);
ctx.strokeText("9", 30, 90);
ctx.strokeText("10", 35, 65);
ctx.strokeText("11", 50, 45);
//wskazowki
ctx.beginPath();
ctx.moveTo(85, 85);
ctx.lineTo(65, 70);
ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(85, 85);
ctx.lineTo(65, 125);
ctx.lineWidth = 3;
ctx.stroke();
// fala lewy g
ctx.beginPath();           
ctx.moveTo(20,65);   
ctx.lineWidth = 1;      
ctx.lineTo(25, 55);
ctx.stroke();  

ctx.beginPath();           
ctx.moveTo(25,55);         
ctx.lineTo(20, 45);
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(20,45);         
ctx.lineTo(35, 35);
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(35,35);         
ctx.lineTo(25, 25);
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(25,25);         
ctx.lineTo(45, 20);
ctx.stroke();   
//fala prwo g
ctx.beginPath();           
ctx.moveTo(150,65);   
ctx.lineWidth = 1;      
ctx.lineTo(145, 55);
ctx.stroke();  

ctx.beginPath();           
ctx.moveTo(145,55);         
ctx.lineTo(150, 45);
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(150,45);         
ctx.lineTo(125, 35);
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(125,35);         
ctx.lineTo(145, 25);
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(145,25);         
ctx.lineTo(105, 20);
ctx.stroke();   
//fala prwo d
ctx.beginPath();           
ctx.moveTo(100,150);   
ctx.lineWidth = 1;      
ctx.lineTo(135, 145);
ctx.stroke();  

ctx.beginPath();           
ctx.moveTo(135,145);         
ctx.lineTo(140, 135);
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(140,135);         
ctx.lineTo(150, 130);
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(150,130);         
ctx.lineTo(140, 120);
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(140,120);         
ctx.lineTo(150, 110);
ctx.stroke();  
//fala lewy d
ctx.beginPath();           
ctx.moveTo(70,150);   
ctx.lineWidth = 1;      
ctx.lineTo(55, 145);
ctx.stroke();  

ctx.beginPath();           
ctx.moveTo(55,145);         
ctx.lineTo(45, 150);
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(45,150);         
ctx.lineTo(35, 135);
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(35,135);         
ctx.lineTo(25, 135);
ctx.stroke();   

ctx.beginPath();           
ctx.moveTo(25,135);         
ctx.lineTo(30, 120);
ctx.stroke();  
//serce
ctx.beginPath();
ctx.moveTo(330, 55);
ctx.bezierCurveTo(250, 20, 200, 90, 250, 150); //lewa gora
ctx.moveTo(330, 55);
ctx.bezierCurveTo(450, 20, 450, 90, 400, 150); //prawa gora
ctx.moveTo(400, 150);
ctx.bezierCurveTo(360, 180, 350, 170, 340, 220); //prawa dol
ctx.moveTo(340, 220);
ctx.bezierCurveTo(290, 160, 300, 190, 250, 150); //prawa dol
ctx.lineTo(250, 150);
ctx.stroke();
//strzala gora
ctx.beginPath();
ctx.moveTo(400, 80);
ctx.lineTo(460, 40);
ctx.moveTo(448, 49);
ctx.lineTo(450, 35);
ctx.moveTo(460, 40);
ctx.lineTo(460, 30);
ctx.moveTo(455, 43);
ctx.lineTo(455, 30);
ctx.moveTo(460, 40);
ctx.lineTo(470, 40);

ctx.moveTo(455, 43);
ctx.lineTo(470, 45);

ctx.moveTo(448, 49);
ctx.lineTo(465, 50);
ctx.stroke();
//strzala dół
ctx.beginPath();
ctx.moveTo(280, 130);
ctx.lineTo(230, 160);

ctx.moveTo(230, 160);
ctx.lineTo(238, 170);
ctx.moveTo(230, 160);
ctx.lineTo(223, 150);

ctx.moveTo(223, 150);
ctx.lineTo(218, 170);

ctx.moveTo(238, 170);
ctx.lineTo(218, 170);

ctx.stroke();
ctx.beginPath();
    ctx.moveTo(238, 170);
    ctx.lineTo(223, 150);
    ctx.lineTo(218, 170);
    ctx.fill();
//kwiatek
ctx.beginPath();
ctx.arc(330, 120, 11, 0, 4 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(330, 120, 4, 0, 4 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.arc(315, 110, 11, 1, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(315, 110, 4, 1, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(320, 135, 11, 12, 1.5 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(320, 135, 4, 12, 1.5 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(340, 110, 11, 1.5, 5 * Math.PI,true);
ctx.stroke();

ctx.beginPath();
ctx.arc(341, 109, 4, 1.5, 5 * Math.PI,true);
ctx.stroke();

ctx.beginPath();
ctx.arc(345, 134, 11, 0, 2 * Math.PI,false);
ctx.stroke();

ctx.beginPath();
ctx.arc(345, 134, 4, 3, 2 * Math.PI,true);
ctx.stroke();
//piorunki
ctx.beginPath();
ctx.moveTo(250,80);
ctx.lineTo(240, 90);
ctx.moveTo(240, 90);
ctx.lineTo(250, 90);
ctx.moveTo(250, 90);
ctx.lineTo(240, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(420,80);
ctx.lineTo(410, 90);
ctx.moveTo(410, 90);
ctx.lineTo(420, 90);
ctx.moveTo(420, 90);
ctx.lineTo(410, 100);
ctx.stroke();
//ta rakieta
//nozki rakiety
ctx.beginPath();
    ctx.moveTo(190, 650);
    ctx.lineTo(170, 680);
    ctx.lineTo(210, 680);
    ctx.lineTo(190, 650);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(260, 650);
    ctx.lineTo(240, 680);
    ctx.lineTo(280, 680);
    ctx.lineTo(260, 650);
    ctx.fill();
//g kwadrat
    ctx.beginPath();

    ctx.rect(170, 480, 110, 170);
    ctx.fillStyle = 'yellow';
    ctx.fill();
//trojkat gora
    ctx.beginPath();
    ctx.moveTo(280, 480);
    ctx.lineTo(170, 480);
    ctx.lineTo(225, 420);
    ctx.fillStyle = 'red';
    ctx.fill();
//szyby w dol w mercedesach
ctx.beginPath();
ctx.arc(225, 525, 15, 0, 2 * Math.PI,true);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.beginPath();
ctx.arc(225, 580, 15, 0, 2 * Math.PI,true);
ctx.fillStyle = 'blue';
ctx.fill();
//kanicerg
ctx.beginPath();
ctx.bezierCurveTo(205, 350, 195, 400, 225, 420);
ctx.bezierCurveTo(255, 400, 255, 400, 260, 350);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(225,420);
ctx.lineTo(235,345);
ctx.moveTo(205,350);
ctx.lineTo(235,345);
ctx.moveTo(260, 350);
ctx.lineTo(235,345);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(225,420);
ctx.lineTo(255,390);
ctx.moveTo(255,390);
ctx.lineTo(230,380);
ctx.moveTo(230,380);
ctx.lineTo(258,370);
ctx.moveTo(230,380);
ctx.lineTo(258,370);
ctx.moveTo(258,370);
ctx.lineTo(232,360);
ctx.moveTo(232,360);
ctx.lineTo(260,350);

ctx.moveTo(225,420);
ctx.lineTo(240,400);
ctx.moveTo(240,400);
ctx.lineTo(230,390);
ctx.moveTo(230,390);
ctx.lineTo(256,380);
ctx.moveTo(256,380);
ctx.lineTo(231,365);
ctx.moveTo(231,365);
ctx.lineTo(260,360);
ctx.moveTo(260,360);
ctx.lineTo(235,345);
ctx.stroke();

ctx.moveTo(225,420);
ctx.lineTo(205,390);
ctx.moveTo(205,390);
ctx.lineTo(230,380);
ctx.moveTo(230,380);
ctx.lineTo(204,370);
ctx.moveTo(204,370);
ctx.lineTo(235,360);
ctx.moveTo(235,360);
ctx.lineTo(203,350);

ctx.moveTo(225,420);
ctx.lineTo(220,390);
ctx.moveTo(220,390);
ctx.lineTo(205,380);
ctx.moveTo(205,380);
ctx.lineTo(231,370);
ctx.moveTo(231,370);
ctx.lineTo(204,360);
ctx.moveTo(204,360);
ctx.lineTo(235,345);

ctx.stroke();