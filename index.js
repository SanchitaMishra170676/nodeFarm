const fs = require('fs');
// const textIn = fs.readFileSync(`${__dirname}/txt/input.txt`, 'utf-8');
// const output = `This is what we know about Avocado : \n ${textIn}. \n ${Date.now()}`;
// fs.writeFileSync(`${__dirname}/txt/output.txt`,output);
// console.log('file created!');

fs.readFile(`${__dirname}/txt/start.txt`,'utf-8',(err, data) => 
    {fs.readFile(`${__dirname}/txt/${data}.txt`,'utf-8',(err, data2) =>
        {fs.readFile(`${__dirname}/txt/append.txt`,'utf-8', (err,data3)=>
            {fs.writeFile(`${__dirname}/txt/final.txt`,`${data2} \n ${data3}`, 'utf-8', err =>
                {console.log('Your file is created');}
            );}
        );}
);}
);
console.log('Reading File');
