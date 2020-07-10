const fs = require('fs');
const http = require('http');
const url = require('url');

// const textIn = fs.readFileSync(`${__dirname}/txt/input.txt`, 'utf-8');
// const output = `This is what we know about Avocado : \n ${textIn}. \n ${Date.now()}`;
// fs.writeFileSync(`${__dirname}/txt/output.txt`,output);
// console.log('file created!');
 


//////////////////////////////////Asynchronus File Reading///////////////////////////////////////////////////////////////
// fs.readFile(`${__dirname}/txt/start.txt`,'utf-8',(err, data) => 
//     {fs.readFile(`${__dirname}/txt/${data}.txt`,'utf-8',(err, data2) =>
//         {fs.readFile(`${__dirname}/txt/append.txt`,'utf-8', (err,data3)=>
//             {fs.writeFile(`${__dirname}/txt/final.txt`,`${data2} \n ${data3}`, 'utf-8', err =>
//                 {console.log('Your file is created');}
//             );}
//         );}
// );}
// );
// console.log('Reading File');
////////////////////////////////////Server//////////////////////////////////////////////////////////////////////////////

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res) => 
{const pathName = req.url;
    if (pathName === '/' || pathName === '/overview'){
        res.end('This is Overview');
    }
    else if (pathName === '/product'){
        res.end('This is product');
    }
    else if (pathName === '/api'){
        
         res.end(data);
    }
    else{
        res.writeHead(404, {'Content-type' : 'text/html' });
        res.end('<h1> Page not Found </h1>');
    }
}
);
server.listen(8000,'127.0.0.1', ()=> {console.log('Listening to server on port 8000');});