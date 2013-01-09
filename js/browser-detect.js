var Browser = {
  Version: function() {
    var version = 999; // we assume a non-ie browser
    if (navigator.appVersion.indexOf("MSIE") != -1)
      // bah, IE again, lets downgrade version number
      version = parseFloat(navigator.appVersion.split("MSIE")[1]);
    return version;
  }
}
var browserVersion; // = navigator.appVersion;

if (Browser.Version() === 999) {
	browserVersion = "Hello, you do not have IE";
} else {
	browserVersion = "Hello, you're seeing this message because you are browsing with Internet Explorer, which causes you to lose out on a great deal"
	+"of functionality on the web site. ownload <a href='#'>Chrome</a> you stooge";
}





function createDiv() 
{ var _body = document.getElementsByTagName('body') [0];
var _div = document.createElement('div');
_div.innerHTML = browserVersion;
//_div.appendChild(_text);
//_div.className = 'alert-banner';
//_body.appendChild(_div);

_div.style.backgroundColor="rgba(248, 72, 72, 0.8)";
_div.style.padding="10px";



document.body.insertBefore(_div,document.body.firstChild);
document.body.style.paddingTop = "0px";
document.body.style.marginTop = "0px";


}
window.onload = createDiv;
