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
      <!-- Fonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
         href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&family=Rajdhani:wght@400;500;600;700&display=swap"
         rel="stylesheet">
   
      <!-- Font Awesome CDN-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
         integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
         crossorigin="anonymous" referrerpolicy="no-referrer" />
   
      <title>server</title>
   
      <link rel="stylesheet" href="css/style.css">
   </head>
   
   <body>
      <div class="container">
   
         <div class="slide">
   
         <div class="item" style="background-image: url(https://raw.githubusercontent.com/simonasablinaite/Card-carousel/master/img/img-1.jpg?token=GHSAT0AAAAAACMNEO26OPAUYFY566MLHYNGZMXY5WQ);">
               <div class="content">
                  <div class="name">Iceland</div>
                  <div class="des">Lorem ipsum dolor sit amet.</div>
                  <button>See More</button>
               </div>
            </div>
   
            <div class="item" style="background-image: url(https://raw.githubusercontent.com/simonasablinaite/Card-carousel/master/img/img-2.jpg?token=GHSAT0AAAAAACMNEO26IYCCRIE6HOXG57KSZMXY6RQ);">
               <div class="content">
                  <div class="name">Iceland</div>
                  <div class="des">Lorem ipsum dolor sit amet.</div>
                  <button>See More</button>
               </div>
            </div>
   
            <div class="item" style="background-image: url(https://raw.githubusercontent.com/simonasablinaite/Card-carousel/master/img/img-3.jpg?token=GHSAT0AAAAAACMNEO27U2KJELQ5SZVD4JAAZMXY7CA);">
               <div class="content">
                  <div class="name">Iceland</div>
                  <div class="des">Lorem ipsum dolor sit amet.</div>
                  <button>See More</button>
               </div>
            </div>
   
            <div class="item" style="background-image: url(https://raw.githubusercontent.com/simonasablinaite/Card-carousel/master/img/img-4.jpg?token=GHSAT0AAAAAACMNEO27KATBNVRYV3TZ57EKZMXY7PA);">
               <div class="content">
                  <div class="name">Australia</div>
                  <div class="des">Lorem ipsum dolor sit amet.</div>
                  <button>See More</button>
               </div>
            </div>
   
            <div class="item">
            <img class="background-image" src="https://raw.githubusercontent.com/simonasablinaite/Card-carousel/master/img/img-5.jpg?token=GHSAT0AAAAAACMNEO26JSCANIK72QAX55OKZMXY72A" alt=""/>   
            <div class="content">
                  <div class="name">Netherland</div>
                  <div class="des">Lorem ipsum dolor sit amet.</div>
                  <button>See More</button>
               </div>
            </div>
   
            <div class="item" style="background-image: url(https://raw.githubusercontent.com/simonasablinaite/Card-carousel/master/img/img-6.jpg?token=GHSAT0AAAAAACMNEO26NABLSY4T6DDKQM34ZMXZAFQ);">
               <div class="content">
                  <div class="name">Ireland</div>
                  <div class="des">Lorem ipsum dolor sit amet.</div>
                  <button>See More</button>
               </div>
            </div>
         </div>
   
         <div class="button">
            <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
            <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
         </div>
   
      </div>
   
      <script src="./index.js" type="module"></script>
   </body>
   
   </html>`;
}

if (req.url === '/css/style.css') {
   responseContent = `/* 
   font-family: 'Caveat', cursive;
   font-family: 'Rajdhani', sans-serif;
   background: yellowgreen;
   */
   
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     background: #eaeaea;
     overflow: hidden;
   }
   
   .container {
     width: 1000px;
     height: 600px;
     background: #f5f5f5;
     position: absolute;
     top: 50%;
     left: 50%;
     box-shadow: 0 30px 50px #dbdbdb;
     transform: translate(-50%, -50%);
   }
   
   .container .slide .item {
     display: inline-block;
     width: 200px;
     height: 300px;
     position: absolute;
     top: 50%;
     border-radius: 20px;
     box-shadow: 0 10px 30px #505050;
     background-position: 50% 50%;
     background-size: cover;
   
     transform: translate(0, -50%);
     transition: 0.5s;
   }
   
   .slide .item:nth-child(1),
   .slide .item:nth-child(2) {
     width: 100%;
     height: 100%;
     border-radius: 0;
     top: 0;
     left: 0;
   
     transform: translate(0, 0);
   }
   
   .slide .item:nth-child(3) {
     left: 50%;
   }
   
   .slide .item:nth-child(4) {
     left: calc(50% + 220px);
   }
   
   .slide .item:nth-child(5) {
     left: calc(50% + 440px);
   }
   
   /* cia n = 0, 1, 2, 3 ... */
   .slide .item:nth-child(n + 6) {
     left: calc(50% + 660px);
     opacity: 0;
   }
   
   .item .content {
     width: 300px;
     position: absolute;
     top: 50%;
     left: 100px;
     text-align: left;
     color: #eee;
     font-family: "Rajdhani", sans-serif;
     font-weight: 600;
     display: none;
   }
   
   .slide .item:nth-child(2) .content {
     display: block;
   }
   
   .content .name {
     font-size: 40px;
     text-transform: uppercase;
     font-weight: bold;
   
     opacity: 0;
     animation: animate 1s ease-in-out 1 forwards;
   }
   
   .content .des {
     margin-top: 10px;
     margin-bottom: 20px;
     opacity: 0;
     animation: animate 1s ease-in-out 0.6s 1 forwards;
   }
   
   .content button {
     padding: 10px 20px;
     border: none;
     cursor: pointer;
   
     opacity: 0;
     animation: animate 1s ease-in-out 1 forwards;
   }
   
   @keyframes animate {
     from {
       opacity: 0;
       transform: translate(0, 100px);
       filter: blur(33px);
     }
     to {
       opacity: 1;
       transform: translate(0);
       filter: blur(0);
     }
   }
   
   .button {
     width: 100%;
     text-align: center;
     position: absolute;
     bottom: 20px;
   }
   
   .button button {
     width: 40px;
     height: 35px;
     border-radius: 8px;
     border: 1px solid #000;
     cursor: pointer;
     margin: 0 5px;
   
     transition: 0.3s;
   }
   
   .button button:hover {
     background: #ababab;
     color: #fff;
   }
   `
}

if (req.url === '/index.js') {
responseContent = `const nextBtnEl = document.querySelector('.next');
const prevBtnEl = document.querySelector('.prev');

const clickNextHandler = () => {
   let itemsEl = document.querySelectorAll('.item');
   document.querySelector('.slide').appendChild(itemsEl[0]);
}

const clickPrevHandler = () => {
   let itemsEl = document.querySelectorAll('.item');
   document.querySelector('.slide').prepend(itemsEl[itemsEl.length - 1]);

}

nextBtnEl.addEventListener('click', clickNextHandler);
prevBtnEl.addEventListener('click', clickPrevHandler);`
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
