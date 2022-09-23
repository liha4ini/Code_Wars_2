function find(a, e) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === e) return i;
    }
    return "Not found";
}