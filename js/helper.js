url = window.location.href;
url_find = url.includes("https")
url_find1 = url.includes("getprivacy.cf")
url_result = url_find + url_find1;
if (self === top) {
  var antiClickjack = document.getElementById("antiClickjack");
  antiClickjack.parentNode.removeChild(antiClickjack);
} else {
  top.location = self.location; }
