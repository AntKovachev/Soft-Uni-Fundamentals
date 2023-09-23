function prime(a) {
    if (a <= 1) {
        console.log(`False`);
    }  else {

            if (a % 2 == 0) {
                console.log(`False`);
            } else if (a % 2 != 0) {
                console.log(`True`)
            }
    }
}

prime(36)