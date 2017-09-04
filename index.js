var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return katzDeliLine.length;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  var serving = katzDeliLine.shift();
  return `"Welcome, ${serving}. You are number 1 in line."`
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.'
  } else {
    var toReturn = 'The line is currently: 1. katzDeliLine[0]';
    for(let i =1;i<katzDeliLine.length-1; i++){
      toReturn += `, ${i+1}. ${katzDeliLine[i]}`
    }
    return toReturn;
  }
}
