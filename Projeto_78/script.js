var images 
["https://img.freepik.com/free-vector/girl-shy-character_1450-155.jpg?w=2000, https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/A_Humble_Cartoon_Businessman.svg/1582px-A_Humble_Cartoon_Businessman.svg.png, https://st4.depositphotos.com/7760196/20883/i/450/depositphotos_208839760-stock-photo-small-baby-cartoon-minimalism-character.jpg"];

var names
["Álbum de Família", "Aline Silva", "Rodrigo Silva", "Diego Silva"];

var i = 0;
function update()
{
    i++;
    var numbersOfFamilyMemberInArray = 3
    if(i > numberOfFamilyMemberInArray )
    {
        i = 0;
    }
    var updateImage = images[i];
    var updateName = names[i];
    document.getElementById("familyMemberImage").src = updatedImage;
    document.getElementById("familyMemberName").innerHTML = updatedName;
}