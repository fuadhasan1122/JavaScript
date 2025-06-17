function maskEmail(email) {
  let atIndex = email.indexOf("@");
  let namePart = email.slice(0, atIndex);
  let domainPart = email.slice(atIndex);
  let masked = namePart[0] + "*".repeat(namePart.length - 2) + namePart[namePart.length - 1];
  return masked + domainPart;
}

let email = "fuad43002@gmail.com";
console.log(maskEmail(email)); 
