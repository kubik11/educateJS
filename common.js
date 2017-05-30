var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertX =['Willy the Goblin',
              'Big Daddy Father',
              'Christmas'];

var insertY = ['the soup kitchen', 
                'Disneyland',
                'the White House'];

var insertZ = ['spontaneously combusted',
               'melted into a puddle on the sidewalk', 
               'turned into a slug and crawled away'];


function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var itemX = randomValueFromArray(insertX);
  var itemY = randomValueFromArray(insertY);
  var itemZ = randomValueFromArray(insertZ);
  newStory = newStory.replace(/:insertx:/g , itemX);
  newStory = newStory.replace(/:inserty:/g , itemY);
  newStory = newStory.replace(/:insertz:/g , itemZ);
 
    if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace(/Bob/g , name);
    }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);
    var ukWeight = Math.round(weight/14)+ " " + "stone";
    var ukTemperature = Math.round(temperature/2)+ " " + "centigrade";
    newStory = newStory.replace(/94 farenheit/g , ukTemperature);
    newStory = newStory.replace(/300 pounds/g , ukWeight);
  }
 //alert(newStory);
  story.textContent = newStory;
  story.style.visibility = 'visible';
}




var select = document.querySelector('.select');
var list = document.querySelector('.ul');
var h1 = document.querySelector('.h1');

select.onchange = function() {
  var choice = select.value;
  var days;
  var color;
  switch(choice){
    case "January": 
    days = 31;
    color = '#456364';
    break;
    case "February": 
    days = 29;
    color = '#565678';
    break;
    case "March": 
    days = 31;
    color = '#987633';
    break;
    case "April": 
    days = 30;
    color = '#983333';
    break;
    case "May": 
    days = 31;
    color = '#935555';
    break;
    case "June": 
    days = 30;
    color = '#203984';
    break;
    case "July": 
    days = 31;
    color = '#903984';
    break;
    case "August": 
    days = 31;
    color = '#9dcde4';
    break;
    case "September": 
    days = 30;
    color = '#8cdc56';
    break;
    case "October": 
    days = 30;
    color = '#8ffed3';
    break;
    case "November": 
    days = 30;
    color = '#cdcdcd';
    break;
    case "December": 
    days = 31;
    color = '#434343';
    break;
  }
  createCalendar(days, choice, color);
}

function createCalendar(days, choice, color) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.classList.add("listLi");
    //listItem.style.width = widthElement;
    listItem.style.display = 'inline-block';
    listItem.style.liststyle = 'none';
    listItem.style.background = color;
    listItem.style.border = '1px solid #000';
    listItem.style.padding = '20px';
    listItem.textContent = i;
    list.appendChild(listItem);
  }
   var listLi = document.querySelectorAll('.listLi');
  //var myA = ['1','2','3','4'];

   var widthElement = function(arg){
     var arr = [].reduce.call(arg, function(elem, next){
      var a = getComputedStyle(elem).width;
      var b = getComputedStyle(next).width;
        return Math.max(a, b);
     },0);
     return arr;
    }

    alert(widthElement(listLi));

}

createCalendar(31,'January');
