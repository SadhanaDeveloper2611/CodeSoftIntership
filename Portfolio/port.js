AOS.init();
// animation
gsap.to(".box", {
  duration: 1,
  rotation: 360,
  opacity: 1,
  delay: 0.5,
  stagger: 0.2,
  ease: "sine.out",
  force3D: true
});

document.querySelectorAll(".box").forEach(function (box) {
  box.addEventListener("click", function () {
    gsap.to(".box", {
      duration: 0.6,
      opacity: 0,
      y: -100,
      stagger: 0.1,
      ease: "back.in"
    });
  });
});

// download resume
document.getElementById("downloadButton").addEventListener("click", function() {
  // Create a temporary anchor element
  var a = document.createElement('a');
  // Set the href attribute to the path of your resume file
  a.href = "SadhanaResume.pdf"; // Replace with the actual path of your resume file
  // Set the download attribute to specify the filename users will see
  a.download = 'SadhanaResume.pdf'; // Replace with the desired filename for the downloaded file
  // Append the anchor element to the body
  document.body.appendChild(a);
  // Click the anchor element to trigger the download
  a.click();
  // Remove the anchor element from the DOM
  document.body.removeChild(a);
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollTopBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("scrollTopBtn").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

