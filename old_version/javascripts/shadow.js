// We use '<b></b>' througout the site to attach resizable backgrounds.
// If there's shadowing near those, we don't want to repeat the background.
var stylingMarkup ='<b></b>'

// declare a new shadow effect
Effect.Shadow = function (element) {
  element = $(element);
  element.setStyle("position:relative; display:block;");
  var html = element.innerHTML
  element.innerHTML = "<span style=\"position:absolute; display:block; top:0px;\">" + html + "</span>";
  new Insertion.Top(element, "<span style=\"color: #000; display:block; padding:1px;\">" + html.replace(stylingMarkup, '') + "</span>");
  element.firstChild.setOpacity(0.4);
}

// search for all classes named 'shadowed' on page load and shadow the text.
Event.observe(window, 'load', function() {
  $$('.shadowed').each(function(element, index) {new Effect.Shadow(element) });
});
