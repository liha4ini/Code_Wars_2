// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


//Solution 1 =============================================

function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
}

//Solution 2 =============================================

function nameShuffler2(str){
    let firstName = '', lastName = '', toggle = 'fn';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            toggle = 'ln';
            continue;
        }

        if (toggle === 'fn') {
            firstName += str[i];
        } else {
            lastName += str[i];
        }
    }
    return `${lastName} ${firstName}`;
}

