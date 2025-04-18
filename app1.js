const http = require('http');//サーバオブジェクトを作成

var server = http.createServer(//サーバにアクセスがあった時の動作を記述
  (request,response)=>{
    response.end('Hello Node.js!');
  }
);
server.listen(3000);//ポート3000で待ち受け状態にする
