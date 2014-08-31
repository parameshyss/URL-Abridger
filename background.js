
function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  body.removeChild(copyFrom);
}

chrome.browserAction.onClicked.addListener(function(tab) {
    var accessToken = '0537613c9bc680594e979a40303153134bba3e6d';
    var url = 'https://api-ssl.bitly.com/v3/shorten?access_token=' + accessToken + '&longUrl=' + encodeURIComponent(tab.url);
    jQuery.getJSON(
        url,
        {},
        function(response)
        {
            if(response.data.url)
            {
                copyTextToClipboard(response.data.url);
                alert("Short URL: " + response.data.url + " copied to clipboard");
            }
        }
    );
});