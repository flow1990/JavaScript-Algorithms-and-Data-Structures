function palindrome(str) {
  return str.toLowerCase().match(/[a-z0-9]/g).join() === str.toLowerCase().match(/[a-z0-9]/g).reverse().join();
}



palindrome("eye");