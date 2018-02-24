function bookinfo(a){   
//            alert(a);
            var data_file = "products.json";
           var http_request = new XMLHttpRequest();
           try{
              // Opera 8.0+, Firefox, Chrome, Safari
              http_request = new XMLHttpRequest();
           }catch (e){
              // Internet Explorer Browsers
              try{
                 http_request = new ActiveXObject("Msxml2.XMLHTTP");
              }catch (e) {
                 try{
                    http_request = new ActiveXObject("Microsoft.XMLHTTP");
                 }catch (e){
                    // Something went wrong
                    alert("Your browser broke!");
                    return false;
                 }
              }
           }
           http_request.onreadystatechange  = function(){
              if (http_request.readyState == 4  )
              {
                // Javascript function JSON.parse to parse JSON data
                var jsonObj = JSON.parse(http_request.responseText);
//                  alert(jsonObj.book.id.value);

                // jsonObj variable now contains the data structure and can
                // be accessed as jsonObj.name and jsonObj.country.
//                document.getElementById("desc").innerHTML =  jsonObj.book[document.getElementById("desc").value].desc;
                  document.getElementById("desc").innerHTML =  jsonObj.book[a].desc;
                  
//                  alert(jsonObj.book.a.desc);
//                  alert(jsonObj);
              }
           }
           http_request.open("GET", data_file, true);
           http_request.send();
        }
        