function takeANumber (katzline, customer){
  katzline.push(customer)
  return ("Welcome, " + customer + ". You are number " + katzline.length + " in line." );
}
function nowServing(katzline){
  if (katzline.length > 0) {
    return ("Currently serving " + katzline.shift() + ".")
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
