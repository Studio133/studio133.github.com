WebFontConfig = {
    google: { families: [ 'Nobile:700italic,400:latin' ] }
  };
  (function() {
  	document.getElementsByTagName("html")[0].setAttribute("class","wf-loading")
  //  NEEDED to push the wf-loading class to your head
  document.getElementsByTagName("html")[0].setAttribute("className","wf-loading")
  	
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
