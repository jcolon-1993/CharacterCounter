// Place in iife
(function ()
{
  // <textarea> element
  var bio = document.getElementById("bio");
  // Cahracter counter element
  var bioCount = document.getElementById("bio-count");

  // Event listener to call updateCounter() when element gains focus
  addEvent(bio, "focus", updateCounter);
  // Event listener to call updateCounter() when element receives input
  addEvent(bio, "input", updateCounter);

  // Event listener calls anonymous function when element loses focus
  addEvent(bio, "blur", function()
  {
    // If bio is not too long, hide the counter
    if (bio.value.length <= 140)
    {
      bioCount.classname = "hide";
    }
  });

  // Function updates the number of characters left
  function updateCounter(e)
  {
    // Get the target of the event
    var target = e.target || e.srcElement;
    // How many characters are left
    var count = 140 - target.value.length;
    // If less than 0
    if (count < 0)
    {
      // Add class of error
      bioCount.className = "error";
    }
    // If less than 15, add class of warn
    else if (count <= 15)
    {
      bioCount.className = "warn";
    }
    // Otherwise, add class of good
    else
    {
      bioCount.className = "good";
    }
    // Message to display
    var charMsg = "<b>" + count + "</b>" + " characters";
    // Update the counter element
    bioCount.innerHTML = charMsg;
  }
}());
