var url;
function urlInData(id_,json_){
    var found = false
    json_.forEach(element => {
        if(element["id"]==id_){
            console.log("found");
            url = element["url"]
            found = true;
        }
       
    });
    return found
}

function runURL(json_,url_,direct_){
    console.log(json_);
    if(urlInData(url_,json_)){
        if(direct_=="true"){
            console.log("Direct redirection");
            window.location = url;
        }else if(direct_=="false"){
            console.log("Accept redirection");
        }else{
            console.log("Error 404 wrong direct parameter");
        }
    }else{
        console.log("Error 404 no url");
    }
}


var query = window.location.search.substring(1);
var vars = query.split("&");
var id = vars[0];
var direct = vars[1];
fetch('./data.json')
.then((response) => response.json())
.then((json) => runURL(json,id,direct));
