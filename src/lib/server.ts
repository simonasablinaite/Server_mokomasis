import http, {IncomingMessage, ServerResponse} from 'node:http';

type Server = {
init: () => void;
httpServer: any;
}

const server = {} as Server;

server.httpServer = http.createServer((req: IncomingMessage, res: ServerResponse) => {
console.log(req.url);

let responseContent = '';
//  PRIMITYVUS BUDAS GAUTI TURINI I PUSLAPI: NAUDOTI IF'US
if (req.url === '/') {
   responseContent = `<!DOCTYPE html>
   <html lang="en">
   
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>

      <link rel="stylesheet" href="css/main.css">
   </head>
   
   <body>
   <h1>Hello, cia yra HOME PAGE :)</h1>
   <img src="#" alt="kazkokia nuotrauka">
   </body>
   
   </html>`;
}

if (req.url === '/css/main.css') {
   responseContent = `body,
   body * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
     color: yellowgreen;
     font-size: 30px;
   }`
}

if (req.url === '/favicon.ico') {
   responseContent = 'FAVICON ICO FAILAS...'
}

return res.end(responseContent);


});

server.init = () => {
server.httpServer.listen(4410, () => {
   console.log('serveris sukasi ant http://localhost:4410');
});
   
   
}

export { server };
