var katzDeli = [];

function takeANumber(name){
  katzDeli.push(name);
  return katzDeli.length;
}

function nowServing(){
  return katzDeli.shift();
}

function currentLine(){
  if(katzDeli.length === 0){
    return 'The line is currently empty.'
  } else {

  }
  var toReturn = 'The line is currently: 1. katzDeliLine[0]';
  for(let i =1;i<toReturn.length-1; i++){
    toReturn += `, ${i+1}. katzDeliLine[i]`
  }
  return toReturn;
}
