function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  function copyCode() {
    // Get the code block text
    var codeBlock = document.getElementById("code").innerText;

    // Create a temporary textarea element to copy the text
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = codeBlock;
    document.body.appendChild(tempTextarea);

    // Select the text and copy it
    tempTextarea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    // Alert to confirm the code was copied
    alert("Code copied to clipboard!");
}