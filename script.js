//add event listener for mouseover event
var h1Element = document.getElementById('landon');

h1Element.addEventListener('mouseover', function() {
    h1Element.style.fontSize = "40px";
});

h1Element.addEventListener('mouseout', function() {
    h1Element.style.fontSize = "24px";
});

//making the about me a click event, showing info paragraph
const elementAboutMe = document.querySelector("div.about_me p");
let isParagraphVisible = false;

function clickAboutMe() { 
  const aboutMeContent = document.getElementById("aboutMeContent");
  //check if paragraph already exists
  let para = aboutMeContent.querySelector("p");
  if(!para) {
//creat p node if it doesn't exist 
  para = document.createElement("p");
//add to p element
 const node = document.createTextNode("I am an individual driven by a strong motivation to create positive change through technology and solve intricate problems. My journey has been marked by overcoming various challenges, including a 14.5-year sentence, which has instilled in me a deep determination, unwavering tenacity, and resilience crucial for thriving as a software engineer. I embrace my unique background as a source of strength, allowing me to approach projects with a unique perspective and a relentless drive to find innovative solutions. With my unwavering passion and commitment, I am eager to make a meaningful impact in the world of technology.");
 // append textnode to element
 para.appendChild(node);
 //the created paragrah is appended to the p element.
 aboutMeContent.appendChild(para);
  } else {
   //if there is content in the element we will change it back to nothing
   aboutMeContent.textContent= "";
}
//Toggle the visibility flag- By toggling the isParagraphVisible flag, the code alternates between showing and hiding the paragraph on each click. This prevents the repeated addition of the paragraph content when clicking multiple times.
 isParagraphVisible = !isParagraphVisible;
}
elementAboutMe.addEventListener('click', clickAboutMe);
