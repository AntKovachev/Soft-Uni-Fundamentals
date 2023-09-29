function countElementFrequency(arr) {
    const frequencyObject = {};

    for (const element of arr) {
        if (frequencyObject[element]) {
            frequencyObject[element]++;
        } else {
            frequencyObject[element] = 1;
        }
    }

    return frequencyObject;
}


