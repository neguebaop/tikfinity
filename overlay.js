const box=document.getElementById('overlay');
function show(ev){
  if(!ev||!ev.gift)return;
  box.innerHTML=`<img class="gift-alert" src="${ev.gift.img}" alt="">`;
  setTimeout(()=>box.innerHTML='',4200);
}
if(window.BroadcastChannel){
  const bc=new BroadcastChannel('linkfinity_overlay');
  bc.onmessage=(msg)=>show(msg.data);
}
// Sem localStorage: overlay local usa BroadcastChannel. Para produção, trocar por WebSocket/Supabase Realtime.
