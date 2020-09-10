# PWA

Open cmd in the project path
Run this command - npm install
ng add @angular/pwa
You can launch application and check the application before the build using this command. ng serve --ssl true
Open https://localhost:4200 in browser. application will be seen
To check our angular application as PWA, we need to build code and run application in production. so build the code in cmd with this command. ng build --prod
once the command is executed, dist folder is created in the project folder.
We need a server to host our application in production which is ideally cost effective for our POC. so we can use npm package http-server to host the application on server. 
Run this command to install http-server globally. npm install -g  http-server.
http-server -p 8080 -c-1 dist/angular-pwa-app -- run this command to host application on http-server
Now application will be available at http://127.0.0.1:8080/ in browser.
To check the performance of PWA, open dev tools in chrome and check the audit(lighthouse). generate report and check PWA tab. 
To get clarification if the application is available offline, change the status in network to offline and re run the application. We can still see the application even if we are offline. That prove your application make use of service-worker.
You can open this web app as native app by clicking on chrome customise and control 3 dots at the top right corner and you'll find an option "open in angularpwaapp". when clicked on this option, your web app will run as native app.  
End result proves the intended expectection of the POC. 
