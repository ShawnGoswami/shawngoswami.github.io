// Pulls up a caption when scrolling over face picture. 
var face = document.getElementById('Face');

function scroll() 
{
  document.getElementById('popup').style.display = 'block';
}

face.addEventListener('mouseover', scroll)

// Removes caption when leaving face picture area. 
function unscroll() 
{
  document.getElementById('popup').style.display = 'none';
}

face.addEventListener('mouseout', unscroll)
