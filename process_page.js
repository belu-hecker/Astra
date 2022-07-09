
// Extract query parameters from the page URL itself

var pageUrl = new URL(document.documentURI);

function getParamList(url) {
    var paramList = "";
    var tempUrl = null;
    try {
        if (url[0] === "/") {
            url = pageUrl.schema + "://" + pageUrl.host + url
        }
        tempUrl = new URL(url);
        tempUrl.searchParams.forEach(function (value, key) {
            paramList += `<li>${key}: ${value}</li>`
        });
        return paramList;
    } catch (err) {
        console.log('Error parsing URL: ' + url + "Error: " + err)
    }
    return "";
}

var queryParamsMessage = "";
var paramList = getParamList(document.documentURI);
if (paramList !== "") {
    queryParamsMessage += `<tr><td>${document.documentURI}</td><td><ul>${paramList}</ul></td></tr>`;
}


// Find all links
// let as = document.getElementsByTagName('a');


var links = document.getElementsByTagName('a');
var linksMessage = "";
for (i = 0; i < links.length; i++) {
    linksMessage += `<tr><td>${links[i].innerHTML}</td><td><span style="color: blue;">${links[i].getAttribute('href')}</span></td></tr>`
    // Check for query params on URL
    var paramList = getParamList(links[i].getAttribute('href'));
    if (paramList !== "") {
        queryParamsMessage += `<tr><td>${links[i].getAttribute('href')}</td><td><ul>${paramList}</ul></td></tr>`;
    }
}
browser.runtime.sendMessage({html: linksMessage, type: "links"});
browser.runtime.sendMessage({html: queryParamsMessage, type: 'queryParams'});


// Find all scripts


var scripts = document.getElementsByTagName('script');
var scriptsHTML = "";
for (i = 0; i < scripts.length; i++) {
    scriptsHTML += `<tr><td>Source: ${scripts[i].getAttribute('src')}</td><td>HTML: ${scripts[i].innerHTML}</td></tr>`
}
browser.runtime.sendMessage({html: scriptsHTML, type: "scripts"});

// // Find HTML Comments

// function getComments(context) {
//     var foundComments = [];
//     var elementPath = [context];
//     while (elementPath.length > 0) {
//         var el = elementPath.pop();
//         for (var i = 0; i < el.childNodes.length; i++) {
//             var node = el.childNodes[i];
//             if (node.nodeType === Node.COMMENT_NODE) {
//                 foundComments.push(node);
//             } else {
//                 elementPath.push(node);
//             }
//         }
//     }

//     return foundComments;
// }browser.runtime.sendMessage({html: foundComments, type: "Comments"});

// getAllComments(document.documentElement);
// var comments = document.getElementsByTagName('!-- --');
// var commentshtml = "";
// for (i = 0; i < comments.length; i++){
//     commentsHTML += `<tr><td>Source: ${comments[i].getAttribute('!--')}</td><td>HTML: ${comments[i].innerHTML}</td></tr>`
// }
// browser.runtime.sendMessage({html: commentsHTML, type: "Comments"});
// // while (comments) {
//     alert(comments.textContent);
//     comments = x.iterateNext();
// }