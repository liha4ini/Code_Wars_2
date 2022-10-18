// Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

// input: string Array apple

// output: Location of "B", [x,y]


function sc (a) {
    for (i = 0; i < a.length; i++) {
      for (j = 0; j < a[i].length; j++) {
        if (a[i][j] == 'B') return [i, j];
      }
    }
}