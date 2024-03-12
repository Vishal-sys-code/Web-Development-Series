// String Methods: It allows you to manipulate and work with text (strings)

let username = "Vishal Pandey";

console.log(username.charAt(0));
console.log(username.charAt(3));

console.log(username.indexOf("P"));
console.log(username.indexOf(" "));
console.log(username.indexOf("l"));

console.log(username.lastIndexOf("P"));
console.log(username.lastIndexOf(" "));
console.log(username.lastIndexOf("h"));

console.log(username.length);

x = username.trim();
console.log(x);

y = username.toUpperCase();
console.log(y);

z = username.toLowerCase();
console.log(z);

a = username.repeat(3);
console.log(a);

let result = username.startsWith(" ");
console.log(result);

if(result){
    console.log("Your username can't begin with ' '");
}
else{
    console.log(username);
}

let result1 = username.endsWith(" ");
console.log(result);

if(result){
    console.log("Your username can't end with ' '");
}
else{
    console.log(username);
}