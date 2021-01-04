"use strict";

let vowelCount;

function checkVowel() {
  let vowel_list = "aeiouAEIOU";
  vowelCount = 0;
  let txt = document.getElementById("text").value;

  for (var x = 0; x < txt.length; x++) {
    if (vowel_list.indexOf(txt[x]) !== -1) {
      console.log(vowel_list.indexOf(txt[x]));
      vowelCount++;
    }
  }

  alert(`There are ${vowelCount} vowel(s).`);
  return (document.getElementById("text").value = "");
}
