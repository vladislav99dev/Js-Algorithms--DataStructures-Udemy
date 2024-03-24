const uncommonWordsFromTwoSentences = (s1, s2) => {
  const unCommonWords = [];

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  const sentence1Items = s1.split(" ");
  const sentence2Items = s2.split(" ");

  for (const val of sentence1Items) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of sentence2Items) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!frequencyCounter2.hasOwnProperty(key)) unCommonWords.push(key);
  }
  for (const key in frequencyCounter2) {
    if (!frequencyCounter1.hasOwnProperty(key)) unCommonWords.push(key);
  }
  return unCommonWords;
};

uncommonWordsFromTwoSentences("this apple is sweet", "this apple is sour");
