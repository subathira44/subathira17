var sidenav=document.querySelector(".side-navbar");


function showNavbar()
{
    sidenav.style.left="0";
}
function closeNavbar()
{  
    sidenav.style.left="-60%";

}
// JavaScript (script.js)
/*document.getElementById("resumeLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Trigger the file download
    const resumeUrl = "path/to/your/resume.pdf"; // Replace this with the actual path to your resume file
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Your_Resume.pdf"; // The name the file will have when downloaded
    link.click();
});
*/

// Handle Resume download

    // JavaScript to handle the download when the button is clicked
    document.getElementById("downloadBtn").addEventListener("click", function() {
        // Create a temporary anchor element
        var link = document.createElement("a");
        
        // Set the download attribute and the href to the resume PDF file
        link.href = "subathira_resume.pdf"; // Path to your resume file
        link.download = "subathira_resume.pdf"; // File name for download
        
        // Append the link to the document (it needs to be part of the DOM to trigger the download)
        document.body.appendChild(link);
        
        // Programmatically click the link to trigger the download
        link.click();
        
        // Remove the temporary link element from the document
        document.body.removeChild(link);
    });


// Handle GitHub link (open GitHub in a new tab)
document.getElementById("githubLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Open GitHub URL in a new tab
    const githubUrl = "https://github.com/yourusername"; // Replace with your actual GitHub URL
    window.open(githubUrl, "_blank");
});

// Handle Portfolio link (open Portfolio in a new tab)
document.getElementById("portfolioLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Open Portfolio URL in a new tab
    const portfolioUrl = "https://yourportfolio.com"; // Replace with your actual Portfolio URL
    window.open(portfolioUrl, "_blank");
});

