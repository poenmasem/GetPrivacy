url = window.location.href;
url = url.split('?ref=')[1];
if ( url == "undefined" ) {
  window.location.replace("https://getprivacy.cf");
} else {
  window.location.replace("https://getprivacy.cf/" + url);
}
