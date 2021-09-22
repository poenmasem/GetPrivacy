url = window.location.href;
url = url.split('?ref=/')[1];
if ( url == "undefined" ) {
  url = "https://getprivacy.cf"
  window.location.replace(url);
} else {
  url = "https://getprivacy.cf/" + url
  if ( url == "https://getprivacy.cf/undefined" ) {
    url = "https://getprivacy.cf"
  }
  window.location.replace(url);
}
