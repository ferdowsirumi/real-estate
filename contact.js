/* Hazera Ferdowsi : ID: 301168815 */

var feedbackForm = document.getElementById("formEmail");

function resetForm()
{
  confirm("Are you sure to clear the form?");
  if(feedbackForm!=null)
  {
    feedbackForm.reset();
  }
  event.preventDefault();
  return false;
}