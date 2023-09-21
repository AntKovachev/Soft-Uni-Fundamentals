const func = (email) => {
  if (email.includes(`@`) && email.includes(`.`)) {
    return true;
  }
  return false;
};

// ****CHECKS BELOW****
// let emailtrue = func(`marto492@abv.bg`)
// let emailfalse = func(`marto492abvbg`)

// console.log(emailtrue);
// console.log(emailfalse);
