const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!frequencyCounter2.hasOwnProperty(key)) return false;

    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
};

validAnagram("", "");
validAnagram("aaz", "zza");
validAnagram("anagram", "nagaram");
validAnagram("rat", "car");
validAnagram("awesome", "awesom");
validAnagram("awerty", "qeywrt");
validAnagram("texttwisttime", "timetwisttext");
