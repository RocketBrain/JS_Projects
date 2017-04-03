//find the longest word from a sentence, take out all punctuation and non-alpha chars.



function longestWord (sentence) {

  //the container searches through sentence using the match method, a regex pattern seeking tool.
  container = sentence.match(/[a-z0-9]+/gi)

  //now that the sentence has been stripped of all non-alpha chars, we sort the container itself.

  sortAll = container.sort(function(array1,array2) {

    return array2.length - array1.length;

  });

  // the sort method takes in a function, and compares each array against each other.

  //finally we return sortAll, it now contains the longest word within the first array index.

  return sortAll[0];


}

longestWord("Hi, how are you doing?");

//returns "doing" as the longest word.
