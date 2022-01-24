function assert(value, description){
  console.log(description);
  if(!value){
    //throw new Error('Invalid Value');
    console.log('invalid value');
    return false;
  }else{
    console.log('Sucess!');
    return true;
  }
}

module.exports = assert;