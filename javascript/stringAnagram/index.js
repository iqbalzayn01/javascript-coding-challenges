function stringAnagram(dictionary, query) {
  const dictionarySort = dictionary.map((word) => {
    return word.split('').sort().join('');
  });

  const querySort = query.map((word) => {
    return word.split('').sort().join('');
  });

  let dist = {};

  for (let i = 0; i < dictionarySort.length; i++) {
    const word = dictionarySort[i];

    if (dist[word]) {
      dist[word] += 1;
    } else {
      dist[word] = 1;
    }
  }

  const result = querySort.map((q) => {
    return dist[q] || 0;
  });

  return console.log(result);
}

stringAnagram(['buku', 'kubu', 'ubat', 'ukub'], ['ubuk']);
