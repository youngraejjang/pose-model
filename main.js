const { fstat, readFile } = require("fs");

const getViewUrl = (url) => {
    return `views${url}.html`;
}
const port = process.env.PORT||3000,
    http = require("http"),
    fs = require("fs");
    http.createServer((req, res) => {
        let viewUrl = getViewUrl(req.url);
        fs.readFile(viewUrl,(error,data )=> {
            if(error){
                res.writeHead(404);
                res.write("<h1>FILE NOT FOUND</h1>");
            }
            else{
                res.writeHead(200,{
                    "Content":"text/html"
                });
                res.write(data);
            }
            res.end();
        })

    }).listen(port);



    console.log(`Tr server has started and is listening on port number: ${port}`);