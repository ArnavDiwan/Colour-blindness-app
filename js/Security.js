class Security {

    constructor(){

        this.access1 = createInput("")
        this.access1.position(300,600);
        this.access1.style('background', 'white');  

        this.button1 = createButton('next Question');
        this.button1.position(300,630);
        this.button1.style('background', 'lightgrey'); 

        this.access2 = createInput("")
        this.access2.position(1500,-190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('next Question');
        this.button2.position(1500,-220);
        this.button2.style('background', 'lightgrey');
//add code for creating and positioning the third input box and button
        this.access3 = createInput("")
        this.access3.position(-100, -370);
        this.access3.style('background', 'white')

        this.button3 = createButton('next Question')
        this.button3.position(100, -400);
        this.button3.style('background', 'lightgrey')

        this.access4 = createInput("")
        this.access4.position(100, -370);
        this.access4.style('background', 'white')

        this.button4 = createButton('next Question')
        this.button4.position(100, -400);
        this.button4.style('background', 'lightgrey')

        this.access5 = createInput("")
        this.access5.position(100, -370);
        this.access5.style('background', 'white')

        this.button5 = createButton('next Question')
        this.button5.position(100, -400);
        this.button5.style('background', 'lightgrey')

        this.access6 = createInput("")
        this.access6.position(100, -370);
        this.access6.style('background', 'white')

        this.button6 = createButton('next Question')
        this.button6.position(-100, -400);
        this.button6.style('background', 'lightgrey')
 
        this.access7 = createInput("")
        this.access7.position(100, -370);
        this.access7.style('background', 'white')

        this.button7 = createButton('next Question')
        this.button7.position(-100, -400);
        this.button7.style('background', 'lightgrey')
    
        this.access8 = createInput("")
        this.access8.position(-100, -370);
        this.access8.style('background', 'white')

        this.button8 = createButton('next Question')
        this.button8.position(-100, -400);
        this.button8.style('background', 'lightgrey')
    
        this.access9 = createInput("")
        this.access9.position(100, -370);
        this.access9.style('background', 'white')

        this.button9 = createButton('next Question')
        this.button9.position(100, -400);
        this.button9.style('background', 'lightgrey')

        this.access10 = createInput("")
        this.access10.position(100, -370);
        this.access10.style('background', 'white')

        this.button10 = createButton('Finish test')
        this.button10.position(-100, -400);
        this.button10.style('background', 'lightgrey');

        this.buttonres = createButton("veiw result");
        this.buttonres.position(100, -400);
        this.buttonres.style('background', 'lightgrey');

        this.result1 = createButton("Next");
        this.result1.position(-30, 20);
        this.result1.style('background', 'lightgrey');

        this.result2 = createButton("Next");
        this.result2.position(-30, 20);
        this.result2.style('background', 'lightgrey');

        this.result3 = createButton("Next");
        this.result3.position(-30, 20);
        this.result3.style('background', 'lightgrey');

        this.result4 = createButton("Next");
        this.result4.position(-30, 20);
        this.result4.style('background', 'lightgrey');

        this.result5 = createButton("Next");
        this.result5.position(-30, 20);
        this.result5.style('background', 'lightgrey');

        this.result6 = createButton("Next");
        this.result6.position(-30, 20);
        this.result6.style('background', 'lightgrey');

        this.result7 = createButton("Next");
        this.result7.position(-30, 20);
        this.result7.style('background', 'lightgrey');

        this.result8 = createButton("Next");
        this.result8.position(-30, 20);
        this.result8.style('background', 'lightgrey');

        this.result9 = createButton("Next");
        this.result9.position(-30, 20);
        this.result9.style('background', 'lightgrey');

        this.result10 = createButton("Next");
        this.result10.position(-30, 20);
        this.result10.style('background', 'lightgrey');
    }

    display(){

        this.button1.mousePressed(() => {
            this.access1.position(-200, -25);
            this.button1.position(-200, -25);
            this.access2.position(300, 600);
            this.button2.position(300, 630);
            this.access1.style('background', "red");
            box1.visible = false; 
            box2.visible = true;
            if(system.authenticate(accessCode1,this.access1.value())){
                score++;
                this.access2.position(300, 600);
                this.button2.position(300, 630);
                this.access1.style('background', "green")                
            }
            if(system.authenticate(accessCode11,this.access1.value())){
                this.access1.style('background', "yellow");
            }
        });

        this.button2.mousePressed(() => {
            this.access2.position(-200, -25);
            this.button2.position(-200, -25);
            this.access3.position(300, 600);
            this.button3.position(300, 630);
            this.access2.style('background', "red");
            box2.visible = false; 
            box3.visible = true;
            if(system.authenticate(accessCode2,this.access2.value())){
                score++;
                this.access3.position(300, 600);
                this.button3.position(300, 630);
                this.access2.style('background', "green")                
            }
            if(system.authenticate(accessCode11,this.access2.value())){
                this.access2.style('background', "yellow");
            }
        });

        this.button3.mousePressed(() => {
            this.access3.position(-20, -25);
            this.button3.position(-200, -205);
            this.access4.position(300, 600);
            this.button4.position(300, 630);
            this.access3.style('background', "red");
            box3.visible = false; 
            box4.visible = true;
            if(system.authenticate(accessCode3,this.access3.value())){
                score++;
                this.access4.position(300, 600);
                this.button4.position(300, 630);
                this.access3.style('background', "green")                
            }
            if(system.authenticate(accessCode11,this.access3.value())){
                this.access3.style('background', "yellow");
            }
        });

        this.button4.mousePressed(() => {
            this.access4.position(-20, -25);
            this.button4.position(-200, -205);
            this.access5.position(300, 600);
            this.button5.position(300, 630);
            this.access4.style('background', "red");
            box4.visible = false; 
            box5.visible = true;
            if(system.authenticate(accessCode4,this.access4.value())){
                score++;
                this.access5.position(300, 600);
                this.button5.position(300, 630);
                this.access4.style('background', "green")                
            }
            if(system.authenticate(accessCode11,this.access4.value())){
                this.access4.style('background', "yellow");
            }
        });

        this.button5.mousePressed(() => {
            this.access5.position(-20, -25);
            this.button5.position(-200, -205);
            this.access6.position(300, 600);
            this.button6.position(300, 630);
            this.access5.style('background', "red");
            box5.visible = false; 
            box6.visible = true;
            if(system.authenticate(accessCode5,this.access5.value())){
                score++;
                this.access6.position(300, 600);
                this.button6.position(300, 630);
                this.access5.style('background', "green")                
            }
            if(system.authenticate(accessCode11,this.access5.value())){
                this.access5.style('background', "yellow");
            }
        });

        this.button6.mousePressed(() => {
            this.access6.position(-20, -25);
            this.button6.position(-200, -205);
            this.access7.position(300, 600);
            this.button7.position(300, 630);
            this.access6.style('background', "red");
            box6.visible = false; 
            box7.visible = true;
            if(system.authenticate(accessCode6,this.access6.value())){
                score++;
                this.access7.position(300, 600);
                this.button7.position(300, 630);
                this.access6.style('background', "green")                
            }
            if(system.authenticate(accessCode11,this.access6.value())){
                this.access6.style('background', "yellow");
            }
        });

        this.button7.mousePressed(() => {
            this.access7.position(-20, -25);
            this.button7.position(-200, -205);
            this.access8.position(300, 600);
            this.button8.position(300, 630);
            this.access7.style('background', "red");
            box7.visible = false; 
            box8.visible = true;
            if(system.authenticate(accessCode7,this.access7.value())){
                score++;
                this.access8.position(300, 600);
                this.button8.position(300, 630);
                this.access7.style('background', "green")                
            }
            if(system.authenticate(accessCode11,this.access7.value())){
                this.access7.style('background', "yellow");
            }
        });

        this.button8.mousePressed(() => {
            this.access8.position(-20, -25);
            this.button8.position(-200, -205);
            this.access9.position(300, 600);
            this.button9.position(300, 630);
            this.access8.style('background', "red");
            box8.visible = false; 
            box9.visible = true;
            if(system.authenticate(accessCode8,this.access8.value())){
                score++;
                this.access9.position(300, 600);
                this.button9.position(300, 630);
                this.access8.style('background', "green")                
            }
            if(system.authenticate(accessCode11,this.access8.value())){
                this.access8.style('background', "yellow");
            }
        });

        this.button9.mousePressed(() => {
            this.access9.position(-20, -25);
            this.button9.position(-200, -205);
            this.access10.position(300, 600);
            this.button10.position(300, 630);
            this.access9.style('background', "red");
            box9.visible = false; 
            box10.visible = true;
            if(system.authenticate(accessCode9,this.access9.value())){
                score++;
                this.access10.position(300, 600);
                this.button10.position(300, 630);
                this.access9.style('background', "green")                
            }
            if(system.authenticate(accessCode11,this.access9.value())){
                this.access9.style('background', "yellow");
            }
        });

        this.button10.mousePressed(() => {
            this.access10.position(-20, -25);
            this.button10.position(-200, -205);
            this.buttonres.position(600, 600);
            this.button10.style('background', "red");
            box10.visible = false;
            line.visible = false;
            if(system.authenticate(accessCode10, this.access10.value())){
                score++;
                this.access10.style('background', "green");
            }
            if(system.authenticate(accessCode11, this.access10.value())){
                this.access10.style('background', "yellow");
            }

        })

        this.buttonres.mousePressed(() => {
            box1.visible = true;
            this.access1.position(300, 600);
            this.result1.position(300, 630);
            textSize(30);
            fill("white");
            text("Number of Correct Answers: "+score, 300, 50);
            this.buttonres.hide();
        })

        this.result1.mousePressed(()=>{
            box1.visible = false;
            this.access1.position(-200, 10);
            this.result1.position(-200, -200);
            this.result2.position(300, 630);
            this.access2.position(300, 600);
            box2.visible = true;
        })

        this.result2.mousePressed(()=>{
            box2.visible = false;
            this.access2.position(-200, 10);
            this.result2.position(-500, -10);
            this.result3.position(300, 630);
            this.access3.position(300, 600);
            box3.visible = true;
        })

        this.result3.mousePressed(()=>{
            box3.visible = false;
            this.access3.position(-200, 10);
            this.result3.position(-500, -10);
            this.result4.position(300, 630);
            this.access4.position(300, 600);
            box4.visible = true;
        })

        this.result4.mousePressed(()=>{
            box4.visible = false;
            this.access4.position(-200, 10);
            this.result4.position(-500, -10);
            this.result5.position(300, 630);
            this.access5.position(300, 600);
            box5.visible = true;
        })

        this.result5.mousePressed(()=>{
            box5.visible = false;
            this.access5.position(-200, 10);
            this.result5.position(-500, -10);
            this.result6.position(300, 630);
            this.access6.position(300, 600);
            box6.visible = true;
        })

        this.result6.mousePressed(()=>{
            box6.visible = false;
            this.access6.position(-200, 10);
            this.result6.position(-500, -10);
            this.result7.position(300, 630);
            this.access7.position(300, 600);
            box7.visible = true;
        })

        this.result7.mousePressed(()=>{
            box7.visible = false;
            this.access7.position(-200, 10);
            this.result7.position(-500, -10);
            this.result8.position(300, 630);
            this.access8.position(300, 600);
            box8.visible = true;
        })

        this.result8.mousePressed(()=>{
            box8.visible = false;
            this.access8.position(-200, 10);
            this.result8.position(-500, -10);
            this.result9.position(300, 630);
            this.access9.position(300, 600);
            box9.visible = true;
        })

        this.result9.mousePressed(()=>{
            box9.visible = false;
            this.access9.position(-200, 10);
            this.result9.position(-200, -10);
            this.result10.position(300, 630);
            this.access10.position(300, 600);
            box10.visible = true;
            //this.result9.hide();
        })

        this.result10.mousePressed(()=>{
            T.visible = true;
            this.access10.hide();
            this.result10.hide();
        })


    }
}