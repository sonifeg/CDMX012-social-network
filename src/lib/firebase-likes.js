export function countHeart() {
  let counter = 0;
  counter = counter + 1;
  document.querySelectorAll('#numberLikes').innerHTML = `se hicieron${counter}clicks`;
}
