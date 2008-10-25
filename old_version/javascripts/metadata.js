function toggleMetadata() {
  if (moreState = $('more-extended-metadata')) {
    Effect.SlideDown('extended-metadata', {duration:0.15})
    moreState.id = 'less-extended-metadata'
  } else if (lessState = $('less-extended-metadata')) {
    Effect.SlideUp('extended-metadata', {duration:0.15})
    lessState.id = 'more-extended-metadata'
  }
}

var metadataElement

// set mouseover & mouseout observers to change the whole meta-data section colors
// when the tab is hovered over
Event.observe(window, 'load', function() {
  $('content').down('a.more-or-less').observe('mouseover', metadataOver);
  $('content').down('a.more-or-less').observe('mouseout', metadataOut);
  metadataElement = $('extended-metadata')
} );

function metadataOut(event) {metadataElement.removeClassName('hovering')}
function metadataOver(event) {metadataElement.addClassName('hovering')}
