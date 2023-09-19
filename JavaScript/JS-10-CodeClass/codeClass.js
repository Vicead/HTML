//STRING CODE CLASS
//REVIEW

//! ************STRING PROPERTY ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur

//? lenght
//? prototype

//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

const str1="Hello"
const str2="World"

console.log(str1+str2);
str1.concat(str2)

console.log(str1.toLowerCase());
console.log(str1.charAt(2));

//String içinde arama yapma
console.log(str1.includes("al"));
console.log(str1.indexOf("a"));
console.log(str1.startsWith("H"));

//String Parçalama 
console.log(str1.slice(1,3));

//Trim 
const str="               Merhaba       "
console.log(str.trim());

/* ---------------------------------------------------------------------- */
//Split(seperator)
console.log(str1.split(""));
const cumle="Merhaba da07 sınıfı"
const splittedCumle=cumle.split(" ")
console.log(cumle.split(" "));
console.log(splittedCumle);
console.log(splittedCumle[0]);

/* ------------------------------------------------------------------------*/
//split
//reverse, join

//reverse:bi işlemi tersten yaptırır
//join:liste elemanlarını birleştirir

const tersten=str1.split("").reverse().join("")
console.log(str1.split("").reverse().join(""));

/* -------------------------------------------------------------------------- */
/*                                 CODE CLASS                                 */
/* -------------------------------------------------------------------------- */

//Soru-1:Bir cümlenin kelime sayısını veren fonksiyon

const countWords=(sentence)=>{
    const words=sentence.split(" ")
    return words.length    

}
console.log(countWords("Merhaba güneşli gün"));


//Soru-2:Email giren kişiye kullanıcı adı olarak @ işaretinden önce verdiği değeri veren

const userName=(email)=>{
    const sug=email.split("@") 
    return sug[0]
}
console.log(userName("mert12@gmail.com"));


//Soru-3:Bir cümleyi terten yazan program

const reSen=(sentence1)=>{
    const rSentence=sentence1.split(" ").reverse().join(" ")
    return rSentence
}
console.log(reSen("Bir berber bir berbere"));

//Soru-4:Girilen kelimenin polindrom olup olmadığını


// const polWord=(word)=>{
//     const pword=word.split("").reverse().join("");
//     if(word===pword){
//         return "It's polindrom"
//     }else{
//         return "It's not polindrom"
//     }
// }
// console.log(polWord("ara"));

const palWord = (word) => {
    const paWord = word.toLowerCase().replaceAll(" ","");
    const pword =  paWord.split("").reverse().join("");
    if(paWord === pword){
        return "It's a palindrome";
    }else{
        return "It's not a palindrome";
    }
}

console.log(palWord("Ayol abla keten etek al baloya"));

//Soru-5:Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyon

const sesliyiBul=(kelime)=>{
    const sesliHarfDeseni=/[aeıioöuü]/gi;
    const sesliharfler=kelime.match(sesliHarfDeseni)
    console.log(sesliharfler);
}
sesliyiBul("Nasılsın")

//Soru-6: Romen rakamlarına dönüştürücü

const cevir=(romen)=>{
    const parca=romen.split("")
    let sum=0;
    for (let i=0;i<parca.length;i++){
        switch (parca[i]) {
            case "X":
             sum +=10;   
                break;
            case "V":
             sum +=5;   
                break;
            case "I":
             sum +=1;   
                break;
    
            default:
                break;
        }
    }
    
    return sum
    
    }
    const romen="XVI"
     console.log( cevir(romen));

//Soru-7:Run-Length Encoding (RLE)

const runLengthEncoding = (string) => {

    let result = '';
    let count = 1;
  
    for (let i = 0; i < string.length; i++) {
      let j = i + 1;
      while (string[i] === string[j]) {}
      result = result.concat(`${count}${string[i]}`);
      count = 1;
      i = j - 1;
    }
    return result;
  }
console.log(runLengthEncoding("Sen beni bilemedin"));