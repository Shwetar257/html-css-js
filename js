<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name=""viewport"  content="width=device-width,initial-scale=1.0">
        <title>document</title>
    </head>
    <body>
        <h1 id="demo1">this is my first page</h1>
        <button onclick="changedata()">change text </button>
        <script>
            function changedata(){
                var Mytext=document.getElementById("demo1");
                Mytext.innerHTML="i have started javascript"
            }
        </script>
    </body>
    
</html>
