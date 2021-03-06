var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

// var articles = {
//   'article-one': {
//     title:'Article-one',
//     heading:'Article one',
//     date: '25 May',
//     content:`
//             <p>
//                 This is content of article one by Aatish Kumar Singh. This is content of article one by Aatish Kumar Singh. This is content of article one by Aatish Kumar Singh.This is content of article one by Aatish Kumar Singh. This is content of article one by Aatish Kumar Singh. This is content of article one by Aatish Kumar Singh. This is content of article one by Aatish Kumar Singh. This is content of article one by Aatish Kumar Singh.
//             </p>`
           
//     `
// },
//   'article-two' :{
//             title:'Article-two',
//             heading:'Article two',
//             date: '15 May',
//             content:`
//                     <p>
//                         This is content of article second by Aatish Kumar Singh`
//   },
//   'article-three':{
//          title:'Article-three',
//             heading:'Article three',
//             date: '15 May',
//             content:`
//                     <p>
//                         This is content of article third by Aatish Kumar Singh
//                     </p>`
//   },
// };
   
// function createTemplate (data){
//     var title= data.title;
//     var date= data.date;
//     var heading = data.heading;
//     var content = data.content;`

// var htmlTemplate=
// <html>
//     <head>
//         <title>
//             ${title}
//         </title>
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//         <link href="/ui/style.css" rel="stylesheet" />
//     </head>
//     <body>
//         <div class="container">
//                 <div>
//                     <a href="/">Home</a>
//                 </div>
//                 <hr>
//                 <div>
//                     ${date}
//                 </div>
                
//                 <div>
//                 <h3>${heading}
//                 </h3>
//                 </div>
//                 <div>
//                 ${content}
//                 </div>
//         </div>
//     </body>
// </html>`;

// return htmlTemplate;
// }



// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
// });
// app.get('/:articleName',function(req, res){
//     //articleName==article-one
//     //article[articleName]=={} content object for article one
//     var articleName = req.prams.articleName;
//     res.send(createTemplate(articles[articleName]));
// });
// app.get('/article-two',function(req, res){
//     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
// });
// app.get('/article-three',function(req, res){
//     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
// });


app.get('/ui/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
