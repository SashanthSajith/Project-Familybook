var images = ["Family.jpg","Father.jpg"," Mother.jpg","Me.jpg","Bro.jpg"];
var names = ["My Family","Sajith Nambiar", "Preethi Sajith", "Sashanth Sajith", "Sidhanth Sajith"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
