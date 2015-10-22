# furtive-api

> Server control for the [Furtive remote](https://github.com/Apercu/furtive-app) app.

### Let's get started

Install modules

    npm i
    
Launch the server

    npm start
    
By default, the server listen on port 3000, you might have to change that depending on your environment.

If you are under OSX, you might want to allow the shutdown command to be runned without propting for your password. To do so, run `sudo visudo`, and add this line:

    YOUR_USERNAME ALL=NOPASSWD: /sbin/shutdown
    
If others systems other than OSX require shutdown to be runned with `sudo`, please let me know.

### API

The api is still pretty basic and can be understood easily by looking at the [routes.js](./routes.js) file.
Mpv controls have been implemented but I'm now thinking of using sockets instead to handle them, since it should have a better _reactivity_ than other endpoints.

### Warning

You have to understand that this program is intented to be runned in an assumed secured and trusted network. An authentication process might be implemented in the near future though.
