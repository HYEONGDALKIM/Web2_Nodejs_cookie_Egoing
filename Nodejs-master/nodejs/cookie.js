var http = require('http');
var cookie = require('cookie');

http.createServer(function(request, response){
    console.log(request.headers.cookie);
    var cookies ={};
    if(request.headers.cookie !== undefined){
        cookies = cookie.parse(request.headers.cookie);
    }
   
    console.log(cookies.yummy_cookie);
    response.writeHead(200, {
        'Set-Cookie':['yummy_cookie=choco', 
        'tasty_cookie=strawberry',
        `Permanent=cookies; Max-Age=${60*60*24*30}`, // 24시간 지정
        'Secure=Secure; Secure',  // 뒤에 있는게 value를 가진다.
        'HttpOnly=HttpOnly; HttpOnly',
        'Path=Path; Path=/cookie', //특정  디렉터리에 대한 쿠키를 가지고 싶을 때
        'Domain=Domain; Domain=o2.org'
        ]
    });
    response.end('Cookie!!');
}).listen(3000);

