//task
//1
var arr1=[1,2,3,4]
arr1.push("vamshi")
console.log(arr1);

//2
var arr2=[1,2,3,4,"vamshi"]
arr2.pop("vamshi")
console.log(arr1);

//3
var arr3=[1,2,3,4,]
arr3.unshift("vamshi")
console.log(arr3);

//4
var arr4=["vamshi",1,2,3,4,]
arr4.shift("vamshi")
console.log(arr4);

//5
var a=["vamshi","siddu","manoj","sathish"];
var b=a.reverse()
console.log(b);

var m="hii hello namaste adab "
var n=m.split(" ")
console.log(n);

//6
var k=["vamshi","siddu","manoj","sathish"];
var l=k.indexOf("siddu")
console.log(l);

//7
var r=["vamshi","siddu","manoj","sathish"];
var t=r.includes("siddu")
console.log(t);
// 8
var h=[1,6,89,78,98,198,85];   
var i=h.sort()
console.log(i);

//9
var p="hi hello namstea adab "
var j=p.toString()
console.log(j);

//task2
//1
var str2=["vamshi","siddu","manoj","sathish"];
str2.push("SRINU")
str2.shift() //removes 1st element in array
console.log(str2); // add element in last of array

//2
var str4=["vamshi","siddu","manoj","sathish"];
var add=str4.reverse()
console.log(add);
var k="reddy"
var t=str4.concat(k)
console.log(t);

//3
var str5=[1,8,7,6,2,5,3,9]
var order=str5.sort()
console.log(order);
order.pop()
console.log(order); //here 9 is removed 

//4
var i=["vamshi","siddu","manoj","sathish"]
i.unshift("natural","nani")
console.log(i);
i.shift()
console.log(i);
console.log(i.length);

//5
var i=["vamshi","siddu","manoj","sathish"]
var j=["Nani","Nithin","BalaKrishna","pawan kalyan","SaiDharamTej","ram"]
var h=i.concat(j)
console.log(h);
var p=h.sort()
console.log(p);
p.pop()
console.log(p); // here sumii is removed because after soting sumii is last element in ascending oder