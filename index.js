var katzDeli = [];

function takeANumber(name){
  katzDeli.push(name);
  return katzDeli.length;
}

function nowServing(){
  return katzDeli.shift();
}