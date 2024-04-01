function insertionSort(tab) {
  for (let i = 1; i < tab.length; i++) {
    let x = tab[i];
    for (let j = i - 1; j >= 0 && tab[j] > x; j--) {
      tab[j + 1] = tab[j];
    }
    tab[j + 1] = x;
  }
  return tab;
}
console.log(insertionSort([5, 48]));
