var computed = false
var decimal = 0

function convert (entryform, from, to)
{
    convertfrom = from.selectedIndex
    convertto = to.selectedIndex
    entryform.display.value = (entryform.input.value * from[convertfrom].value / to[convertto].value )
}

function addChar (input, character)
{
    if((character=='.' && decimal=="0") || character!='.')
    {
        (input.value == "" || input.value == "0") ? input.value = character : input.value += character
        convert(input.form,input.form.measure1,input.form.measure2)
        computed = true
        if (character=='.')
        {
            decimal=1
        }
    }
}
function openVothcom()
{
    window.open("","Display window","toolbar=no,directories=no,menubar=no");
}
function clear (form)
{
   form.input.value = 0
   form.display.value = 0
   decimal=0
}
function changeBackground()
{
    var checkBox = document.getElementById("background-checkbox");
    if (checkBox.checked === true){
        document.body.style.backgroundColor='#FFFFFF';
        document.body.style.color='#000000';

        var elements = document.getElementsByClassName('navbar'); // get all elements
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "white";
        }

        var shadow = document.getElementsByClassName('page-shadow');
        for(var i = 0; i < shadow.length; i++){
            shadow[i].style.background = "linear-gradient(0deg, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 90%), linear-gradient(180deg, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%)";
        }

        var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++)
        {
            if(links[i].href)
            {
                links[i].style.color = 'black';
            }
        }
    } else {
        document.body.style.backgroundColor='#000000';
        document.body.style.color='#FFFFFF';

        var elements = document.getElementsByClassName('navbar'); // get all elements
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "black";
        }

        var shadow = document.getElementsByClassName('page-shadow');
        for(var i = 0; i < shadow.length; i++){
            shadow[i].style.background = "linear-gradient(0deg, rgba(255,255,255,0) 80%, rgba(0,0,0,1) 90%), linear-gradient(180deg, rgba(255,255,255,0) 80%, rgba(0,0,0,1) 100%)";
        }

        var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++)
        {
            if(links[i].href)
            {
                links[i].style.color = 'white';
            }
        }
    }
}
