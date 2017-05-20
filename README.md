# IT
Hey there!
Anusha here. It's fun to learn Html,JavaScript and CSS but there is always a need to relate to the server. I've taken up simple problems based on Javascript and Nodejs. Hope this is useful! Good luck :)  

Few tips to run :
  For questions which refer to 
  Javascript :- Just create the html file and click on the (.html) file to get the result
  npm script :- ($ represents command on terminal. Ignore $ and just enter the command)
          Step 1: $npm init. Follow the flow. When you encounter the tag "entry point", enter your main .js file
          Step 2: gedit package.json. In the file , enter your main .js filename in the "main" tag and add a "start" line to the        script. For example, 
    {
     ..
     ..
     "main":"q10_main.js",
     ..
     }
    
    "scripts": {
    "start": "nodejs q10a_main.js",  //The main file
    "test": "echo \"Error: no test specified\" && exit 1"
  }
        Step 3: $npm start
   
   nodejs :- $nodejs mainfile.js
