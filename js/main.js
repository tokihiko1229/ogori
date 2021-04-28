'use strict;'
{
  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', () => {
    const n = Math.random();
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    if(!player1.value || !player2.value){
      btn.textContent = '注意書き見て！';
    } else {
      if (n >= 0.5) {
        btn.textContent = document.getElementById('player1').value + "の奢り！";
      } else {
        btn.textContent = document.getElementById('player2').value + "の奢り！";
      }
    }
  });
}