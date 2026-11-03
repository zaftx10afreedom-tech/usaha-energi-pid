'use strict';
const slideData = [
 {title:'Usaha dan Energi',subtitle:'Pengantar konsep usaha, energi, dan penerapannya.',chapter:'PEMBUKA',topic:'Peta materi',desc:'Pelajari bagaimana gaya melakukan usaha dan bagaimana energi berpindah atau berubah bentuk.'},
 {title:'Usaha',subtitle:'Gaya, perpindahan, sudut, serta usaha positif dan negatif.',chapter:'USAHA',topic:'Usaha oleh gaya',desc:'Usaha oleh gaya konstan bergantung pada besar gaya, perpindahan, dan sudut antara keduanya. Perhatikan tanda hasilnya.'},
 {title:'Energi Kinetik dan Potensial',subtitle:'Hubungan usaha dengan perubahan energi.',chapter:'ENERGI',topic:'Energi gerak dan ketinggian',desc:'Energi kinetik terkait gerak, sedangkan energi potensial gravitasi terkait posisi terhadap acuan.'},
 {title:'Usaha dan Gaya Konservatif',subtitle:'Usaha gaya berat, gravitasi, dan pegas.',chapter:'GAYA',topic:'Usaha oleh gaya konservatif',desc:'Usaha gaya konservatif hanya ditentukan posisi awal dan akhir. Energi pegas ideal bergantung pada kuadrat simpangannya.'},
 {title:'Kekekalan Energi Mekanik',subtitle:'Perubahan energi kinetik dan energi potensial.',chapter:'KEKEKALAN',topic:'Energi mekanik',desc:'Tanpa gaya nonkonservatif yang melakukan usaha, energi mekanik total sistem tetap.',editorial:true},
 {title:'Benda Jatuh Bebas dan Ayunan',subtitle:'Aplikasi perubahan energi pada gerak.',chapter:'APLIKASI',topic:'Energi saat bergerak',desc:'Saat benda jatuh atau ayunan turun, energi potensial beralih menjadi energi kinetik jika hambatan diabaikan.'},
 {title:'Daya dan Efisiensi',subtitle:'Laju melakukan usaha dan pemanfaatan energi.',chapter:'DAYA',topic:'Daya dan efisiensi',desc:'Daya mengukur laju perubahan energi. Efisiensi membandingkan keluaran bermanfaat dengan masukan.'},
 {title:'Terima Kasih',subtitle:'Refleksi dan rangkuman pembelajaran.',chapter:'PENUTUP',topic:'Refleksi',desc:'Gunakan Rekap Kuis untuk meninjau penguasaan materi dan mengulang soal yang masih keliru.'}
];
const questions = [
 {id:'u1',slide:2,type:'pg',q:'Sebuah gaya 50 N membentuk sudut 60° terhadap arah perpindahan 4 m. Berapakah usaha oleh gaya tersebut?',opts:['50 J','100 J','150 J','200 J','250 J'],correct:[1],explain:'W = F × s × cos θ = 50 × 4 × cos 60° = 100 J.'},
 {id:'u2',slide:2,type:'mcma',q:'Pilih semua pernyataan yang benar tentang usaha oleh gaya konstan.',opts:['Gaya searah perpindahan melakukan usaha sebesar F × s.','Jika sudut gaya 90°, usaha bernilai F × s.','Gaya yang berlawanan arah dengan perpindahan melakukan usaha negatif.','Ketika perpindahan nol, gaya selalu melakukan usaha positif.','Satuan SI untuk usaha adalah watt.'],correct:[0,2],explain:'Untuk gaya searah, cos 0° = 1 sehingga W = Fs. Untuk gaya berlawanan arah, cos 180° = −1 sehingga usaha negatif. Ketika θ = 90° atau s = 0, usaha nol; satuan usaha adalah joule.'},
 {id:'u3',slide:3,type:'pg',q:'Benda bermassa 2 kg bergerak dengan kelajuan 6 m/s. Berapakah energi kinetiknya?',opts:['12 J','18 J','24 J','36 J','72 J'],correct:[3],explain:'Eₖ = ½mv² = ½ × 2 × 6² = 36 J.'},
 {id:'u4',slide:3,type:'mcma',q:'Pilih semua pernyataan yang benar mengenai energi kinetik dan energi potensial gravitasi.',opts:['Energi kinetik dipengaruhi massa benda.','Energi kinetik berbanding lurus dengan kelajuan benda.','Energi potensial gravitasi dekat permukaan Bumi dapat dihitung dengan mgh.','Energi potensial gravitasi tidak dipengaruhi pemilihan titik acuan.','Joule merupakan satuan SI untuk daya.'],correct:[0,2],explain:'Energi kinetik Eₖ = ½mv² dipengaruhi massa dan kuadrat kelajuan. Energi potensial Eₚ = mgh berlaku dekat permukaan Bumi dengan g konstan dan bergantung pada acuan ketinggian. Joule adalah satuan energi, bukan daya.'},
 {id:'u5',slide:4,type:'pg',q:'Pegas ideal mempunyai konstanta 200 N/m dan ditekan sejauh 0,10 m dari posisi setimbang. Berapakah energi potensial elastis yang tersimpan?',opts:['0,5 J','1 J','2 J','10 J','20 J'],correct:[1],explain:'Eₚ pegas = ½kx² = ½ × 200 × (0,10)² = 1 J.'},
 {id:'u6',slide:4,type:'mcma',q:'Pilih semua pernyataan yang benar mengenai gaya konservatif.',opts:['Usaha gaya gravitasi hanya bergantung pada posisi awal dan akhir.','Gaya pegas ideal merupakan gaya konservatif.','Usaha gaya konservatif sepanjang lintasan tertutup selalu positif.','Energi potensial gravitasi selalu bernilai negatif.','Usaha gaya konservatif sama dengan pertambahan energi potensial.'],correct:[0,1],explain:'Usaha gaya konservatif tidak bergantung pada lintasan. Usaha sepanjang lintasan tertutup nol, dan untuk gaya konservatif berlaku W = −ΔEₚ.'},
 {id:'u7',slide:5,type:'pg',q:'Benda bermassa 2 kg dilepas dari keadaan diam pada ketinggian 5 m. Jika g = 10 m/s² dan hambatan udara diabaikan, berapakah energi mekaniknya selama jatuh?',opts:['20 J','50 J','80 J','100 J','200 J'],correct:[3],explain:'Di titik awal Eₖ = 0 dan Eₚ = mgh = 2 × 10 × 5 = 100 J. Tanpa hambatan udara, energi mekanik tetap 100 J.'},
 {id:'u8',slide:5,type:'mcma',q:'Pilih semua pernyataan yang benar tentang kekekalan energi mekanik.',opts:['Energi mekanik tetap jika hanya gaya konservatif yang melakukan usaha.','Saat benda jatuh bebas tanpa hambatan, energi potensial berkurang dan energi kinetik bertambah.','Energi mekanik selalu bertambah ketika benda jatuh.','Gaya gesek tidak dapat mengubah energi mekanik sistem.','Energi benda hilang seluruhnya ketika mencapai tanah.'],correct:[0,1],explain:'Tanpa kerja gaya nonkonservatif, jumlah Eₖ + Eₚ tetap. Selama jatuh bebas ideal, sebagian energi potensial berubah menjadi energi kinetik.'},
 {id:'u9',slide:6,type:'pg',q:'Benda jatuh bebas dari keadaan diam sejauh 1,8 m. Jika g = 10 m/s², berapakah kelajuannya tepat setelah turun sejauh itu?',opts:['3 m/s','4 m/s','5 m/s','6 m/s','8 m/s'],correct:[3],explain:'mgh = ½mv², sehingga v = √(2gh) = √(2 × 10 × 1,8) = 6 m/s.'},
 {id:'u10',slide:6,type:'pg',q:'Sebuah ayunan dilepas dari keadaan diam. Titik terendahnya berada 0,8 m di bawah titik awal. Jika hambatan diabaikan dan g = 10 m/s², berapakah kelajuan di titik terendah?',opts:['2 m/s','3 m/s','4 m/s','5 m/s','8 m/s'],correct:[2],explain:'Penurunan energi potensial berubah menjadi energi kinetik: v = √(2 × 10 × 0,8) = 4 m/s.'},
 {id:'u11',slide:7,type:'pg',q:'Sebuah mesin melakukan usaha 600 J dalam waktu 20 s. Berapakah daya rata-ratanya?',opts:['15 W','20 W','30 W','40 W','60 W'],correct:[2],explain:'P = W/t = 600/20 = 30 W.'},
 {id:'u12',slide:7,type:'mcma',q:'Pilih semua pernyataan yang benar mengenai daya dan efisiensi energi.',opts:['Efisiensi = (energi keluaran bermanfaat / energi masukan) × 100%.','Dalam model ideal tanpa rugi energi, efisiensi dapat mencapai 100%.','Jika masukan 200 J dan keluaran 150 J, efisiensinya 125%.','Satuan SI daya adalah joule.','Efisiensi selalu dihitung dengan membagi energi masukan dengan keluaran.'],correct:[0,1],explain:'Efisiensi adalah perbandingan keluaran bermanfaat terhadap masukan. Untuk 150 J dari 200 J, efisiensi = 75%. Daya bersatuan watt (W).'}
];

const $ = id => document.getElementById(id);
const TOTAL = slideData.length;
const LETTERS = ['A','B','C','D','E'];
const KEY = 'studio-fisika-usaha-energi-pid-v1'; // mempertahankan kompatibilitas nilai versi sebelumnya
const bySlide = n => questions.filter(q => q.slide === n);
const safeText = v => String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad = n => String(n).padStart(2,'0');
let saved = {};
try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch(_) { saved = {}; }
const state = {
  slide: Math.max(1,Math.min(TOTAL,Number(saved.lastSlide)||1)),
  answers: saved.answers || {},
  ink: saved.strokes || {},
  tool: 'none', zoom:1, panX:0, panY:0,
  pointers:new Map(), gesture:null, penStroke:null, wasMulti:false,
  quizSlide:null, quizIndex:0,
  toolbarTimer:null, modal:null, toolbarShown:true
};
function store() {
  try { localStorage.setItem(KEY,JSON.stringify({lastSlide:state.slide,answers:state.answers,strokes:state.ink})); } catch(_) {}
}
function imageURL(n) {
  return window.PID_IMAGES?.[n] || `slides/slide-${pad(n)}.webp`;
}
function updateToolbar() {
  const hasQuiz = bySlide(state.slide).length > 0;
  $('quizFloat').hidden = !hasQuiz;
  $('quizButton').disabled = !hasQuiz;
  $('quizFloatCount').textContent = hasQuiz ? `${bySlide(state.slide).length} soal` : '';
  $('prevButton').disabled = $('edgePrev').disabled = state.slide === 1;
  $('nextButton').disabled = $('edgeNext').disabled = state.slide === TOTAL;
  ['slideCounter','headerCount'].forEach(id=>$(id).textContent=`${pad(state.slide)} / ${pad(TOTAL)}`);
  $('dockCounter').textContent=`${pad(state.slide)}/${pad(TOTAL)}`;
  $('penButton').classList.toggle('active',state.tool==='pen');
  $('laserButton').classList.toggle('active',state.tool==='laser');
}
function goSlide(n) {
  if (!Number.isFinite(n)) return;
  state.slide = Math.max(1,Math.min(TOTAL,Math.round(n)));
  $('slideImage').src = imageURL(state.slide);
  $('slideImage').alt = `Slide ${state.slide}: ${slideData[state.slide-1].title}`;
  resetZoom(); drawInk(); updateToolbar(); store();
  if (state.modal === 'slidesModal') populateThumbs();
  const url = new URL(location.href);
  url.hash = `slide=${state.slide}`;
  history.replaceState(null,'',url.toString());
}
function showTools() {
  if (state.modal) return;
  state.toolbarShown=true;
  document.body.classList.remove('dock-collapsed');
  $('toolsToggle').hidden=true;
  clearTimeout(state.toolbarTimer);
  state.toolbarTimer=setTimeout(()=> {
    if(state.modal || state.tool === 'pen') return;
    state.toolbarShown=false;
    document.body.classList.add('dock-collapsed');
    $('toolsToggle').hidden=false;
  }, 11500);
}
function openModal(id) {
  state.modal=id;
  clearTimeout(state.toolbarTimer);
  $(id).hidden=false;
  $('toolsToggle').hidden=true;
  if(id==='slidesModal') populateThumbs();
  if(id==='resultsModal') renderResults();
}
function closeModal(id) {
  $(id).hidden=true;
  if(state.modal===id) state.modal=null;
  showTools();
}
function activeModal(){return ['quizModal','slidesModal','resultsModal','helpModal'].find(id=>!$(id).hidden) || null;}
function populateThumbs() {
  $('thumbGrid').innerHTML=slideData.map((s,i)=>{
    const n=i+1;
    return `<button type="button" class="thumb-item ${n===state.slide?'selected':''}" data-goto="${n}"><img alt="" src="${imageURL(n)}"><strong>${pad(n)} · ${safeText(s.title)}</strong><small>${safeText(s.chapter)}</small></button>`;
  }).join('');
  $('thumbGrid').querySelectorAll('[data-goto]').forEach(b=>b.onclick=()=>{
    closeModal('slidesModal');goSlide(Number(b.dataset.goto));
  });
}
function setTool(name) {
  state.tool=state.tool===name?'none':name;
  $('laserDot').hidden=state.tool!=='laser';
  updateToolbar();showTools();
}
function setZoom(level) {
  state.zoom=Math.max(1,Math.min(3,level));
  if(state.zoom===1)state.panX=state.panY=0;
  applyZoom();
}
function resetZoom(){state.zoom=1;state.panX=state.panY=0;applyZoom();}
function applyZoom(){$('slideFrame').style.transform=`translate(${state.panX}px,${state.panY}px) scale(${state.zoom})`;}
function inkCanvas() {return $('inkCanvas');}
function drawInk() {
  const canvas=inkCanvas();
  if(canvas.width!==1920 || canvas.height!==1080){canvas.width=1920;canvas.height=1080;}
  const ctx=canvas.getContext('2d');ctx.clearRect(0,0,1920,1080);
  ctx.lineWidth=6;ctx.strokeStyle='#ff405f';ctx.lineCap='round';ctx.lineJoin='round';
  for(const stroke of (state.ink[state.slide]||[])){
    if(!stroke.length)continue;
    ctx.beginPath();stroke.forEach((pt,i)=>{
      if(i===0)ctx.moveTo(pt[0]*1920,pt[1]*1080);
      else ctx.lineTo(pt[0]*1920,pt[1]*1080);
    });
    if(stroke.length===1)ctx.lineTo(stroke[0][0]*1920+.1,stroke[0][1]*1080+.1);
    ctx.stroke();
  }
}
function inkPoint(e) {
  const r=$('slideFrame').getBoundingClientRect();
  return [(e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height].map(v=>Math.max(0,Math.min(1,v)));
}
function inSlide(e){const r=$('slideFrame').getBoundingClientRect();return e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom;}
function undoInk(){const a=state.ink[state.slide];if(a?.length){a.pop();drawInk();store();}showTools();}
function clearInk(){state.ink[state.slide]=[];drawInk();store();showTools();}
function pointerGestures() {
  const stage=$('slideStage');
  stage.addEventListener('pointerdown',e=>{
    if(e.target.closest('button') || state.modal || (e.pointerType==='mouse'&&e.button!==0))return;
    try{stage.setPointerCapture(e.pointerId);}catch(_){}
    state.pointers.set(e.pointerId,{startX:e.clientX,startY:e.clientY,x:e.clientX,y:e.clientY});
    if(state.pointers.size===2){
      state.wasMulti=true;state.penStroke=null;
      const a=[...state.pointers.values()];
      state.gesture={distance:Math.hypot(a[1].x-a[0].x,a[1].y-a[0].y),zoom:state.zoom,panX:state.panX,panY:state.panY,centerX:(a[0].x+a[1].x)/2,centerY:(a[0].y+a[1].y)/2};
      return;
    }
    state.wasMulti=false;
    if(state.tool==='pen' && inSlide(e)){
      const point=inkPoint(e);state.ink[state.slide] ||= [];
      state.penStroke=[point];state.ink[state.slide].push(state.penStroke);drawInk();
    }
  });
  stage.addEventListener('pointermove',e=>{
    if(state.tool==='laser'&&!state.modal){$('laserDot').style.left=`${e.clientX}px`;$('laserDot').style.top=`${e.clientY}px`;$('laserDot').hidden=false;}
    if(!state.pointers.has(e.pointerId))return;
    const p=state.pointers.get(e.pointerId),oldX=p.x,oldY=p.y;p.x=e.clientX;p.y=e.clientY;
    if(state.pointers.size===2 && state.gesture){
      const pts=[...state.pointers.values()],d=Math.hypot(pts[1].x-pts[0].x,pts[1].y-pts[0].y);
      const centerX=(pts[0].x+pts[1].x)/2,centerY=(pts[0].y+pts[1].y)/2;
      state.zoom=Math.max(1,Math.min(3,state.gesture.zoom*d/Math.max(1,state.gesture.distance)));
      state.panX=state.gesture.panX+(centerX-state.gesture.centerX);
      state.panY=state.gesture.panY+(centerY-state.gesture.centerY);
      if(state.zoom===1)state.panX=state.panY=0;
      applyZoom();return;
    }
    if(state.tool==='pen' && state.penStroke){state.penStroke.push(inkPoint(e));drawInk();return;}
    if(state.zoom>1 && state.tool!=='laser'){
      state.panX+=e.clientX-oldX;state.panY+=e.clientY-oldY;applyZoom();
    }
  });
  function finish(e){
    const p=state.pointers.get(e.pointerId);if(!p)return;
    if(state.penStroke){state.penStroke=null;store();}
    else if(state.pointers.size===1 && !state.wasMulti && state.tool==='none' && state.zoom===1){
      const dx=e.clientX-p.startX,dy=e.clientY-p.startY;
      if(Math.abs(dx)>70 && Math.abs(dx)>Math.abs(dy)*1.25){goSlide(state.slide+(dx<0?1:-1));}
    }
    state.pointers.delete(e.pointerId);
    if(state.pointers.size<2)state.gesture=null;
    if(!state.pointers.size)state.wasMulti=false;
  }
  stage.addEventListener('pointerup',finish);stage.addEventListener('pointercancel',finish);
}
function scoreStats(){
  const all=questions.map(q=>state.answers[q.id]);
  const answered=all.filter(a=>a?.checked).length;
  const correct=all.filter(a=>a?.checked&&a.correct).length;
  return{answered,correct,percent:answered?Math.round(correct/answered*100):0};
}
function openQuiz(){
  const q=bySlide(state.slide);if(!q.length)return;
  state.quizSlide=state.slide;state.quizIndex=0;
  openModal('quizModal');renderQuiz();
}
function currentQ(){return bySlide(state.quizSlide)[state.quizIndex];}
function renderQuiz(){
  const items=bySlide(state.quizSlide),q=currentQ();if(!q)return;
  const stored=state.answers[q.id]||{selected:[],checked:false,correct:false};
  $('quizTitle').textContent=slideData[state.quizSlide-1].title;
  $('quizProgress').textContent=`SOAL ${state.quizIndex+1} / ${items.length}`;
  $('quizType').textContent=q.type==='mcma'?'PILIHAN GANDA KOMPLEKS':'PILIHAN GANDA';
  $('quizProgressFill').style.width=`${(state.quizIndex+1)/items.length*100}%`;
  $('quizQuestion').textContent=q.q;
  $('quizInstruction').textContent=q.type==='mcma'?'Pilih semua pernyataan yang benar. Nilai 1 diberikan hanya jika seluruh pilihan tepat.':'Pilih satu jawaban yang paling tepat.';
  $('quizOptions').innerHTML=q.opts.map((o,i)=>`<button type="button" class="answer-option ${stored.selected?.includes(i)?'selected':''}" data-option="${i}" ${stored.checked?'disabled':''}><span class="answer-letter">${q.type==='mcma'?(stored.selected?.includes(i)?'✓':'□'):LETTERS[i]}</span><span>${safeText(o)}</span></button>`).join('');
  $('quizOptions').querySelectorAll('[data-option]').forEach(btn=>btn.onclick=()=>{
    if(stored.checked)return;
    const i=Number(btn.dataset.option);
    let selected=stored.selected||[];
    if(q.type==='pg')selected=[i];else selected=selected.includes(i)?selected.filter(x=>x!==i):[...selected,i];
    state.answers[q.id]={selected,checked:false,correct:false};renderQuiz();
  });
  $('quizFeedback').hidden=!stored.checked;
  $('quizFeedback').classList.toggle('good',Boolean(stored.checked&&stored.correct));
  $('quizFeedback').innerHTML=stored.checked?`<b>${stored.correct?'✓ Benar · skor 1':'✕ Belum tepat · skor 0'}</b><div>${safeText(q.explain)}</div><button type="button" class="secondary-btn" id="retryQuestion" style="margin-top:10px">Coba lagi</button>`:'';
  if(stored.checked)$('retryQuestion').onclick=()=>{delete state.answers[q.id];store();renderQuiz();};
  $('quizCheck').hidden=Boolean(stored.checked);
  $('quizCheck').disabled=!(stored.selected?.length);
  $('quizNext').hidden=!stored.checked;
  $('quizNext').textContent=state.quizIndex===items.length-1?'Selesai ✓':'Soal berikutnya ›';
  $('quizPrevious').disabled=state.quizIndex===0;
}
function checkAnswer(){
  const q=currentQ(),d=state.answers[q.id]||{selected:[]};if(!d.selected.length)return;
  const selected=[...d.selected].sort((a,b)=>a-b),correct=[...q.correct].sort((a,b)=>a-b);
  state.answers[q.id]={selected,checked:true,correct:selected.length===correct.length&&selected.every((v,i)=>v===correct[i])};
  store();renderQuiz();
}
function quizMove(by){
  const max=bySlide(state.quizSlide).length;
  if(state.quizIndex+by>=max){closeModal('quizModal');return;}
  state.quizIndex=Math.max(0,state.quizIndex+by);renderQuiz();
}
function renderResults(){
  const s=scoreStats();
  const rows=questions.map((q,i)=>{
    const a=state.answers[q.id];
    return `<tr><td>${pad(i+1)}</td><td>${q.slide}</td><td>${safeText(slideData[q.slide-1].title)}</td><td>${q.type==='pg'?'PG':'PG Kompleks'}</td><td>${a?.checked?LETTERS.filter((_,j)=>a.selected.includes(j)).join(', '):'Belum dijawab'}</td><td><span class="score-chip ${a?.checked?(a.correct?'good':'bad'):''}">${a?.checked?(a.correct?'1':'0'):'—'}</span></td></tr>`;
  }).join('');
  $('resultsContent').innerHTML=`<div class="stat-grid"><div class="stat-tile"><strong>${s.answered}<span> / 12</span></strong><small>Soal diperiksa</small></div><div class="stat-tile"><strong>${s.correct}<span> / 12</span></strong><small>Skor kumulatif</small></div><div class="stat-tile"><strong>${s.percent}<span>%</span></strong><small>Ketepatan soal terjawab</small></div></div><table><thead><tr><th>No.</th><th>Slide</th><th>Materi</th><th>Jenis</th><th>Jawaban</th><th>Skor</th></tr></thead><tbody>${rows}</tbody></table><p class="footnote">Penskoran: tepat seluruhnya = 1; selain itu = 0. Rekap tersimpan secara lokal pada browser PID dan tidak otomatis menjadi nilai individu murid.</p>`;
}
function exportCSV(){
  const rows=[['No','Slide','Materi','Tipe','Jawaban','Skor'],...questions.map((q,i)=>{
    const d=state.answers[q.id];return[i+1,q.slide,slideData[q.slide-1].title,q.type==='pg'?'PG':'MCMA',d?.checked?d.selected.map(x=>LETTERS[x]).join(' & '):'Belum dijawab',d?.checked?(d.correct?1:0):''];
  })];
  const csv='\uFEFF'+rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(';')).join('\r\n');
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download='Rekap_Kuis_Usaha_dan_Energi_PID.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);
}
function fullscreen(){
  if(document.fullscreenElement){document.exitFullscreen?.().catch(()=>{});}
  else document.documentElement.requestFullscreen?.().catch(()=>{});
  showTools();
}
function init(){
  document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>{const id=b.closest('.modal-backdrop').id;closeModal(id);});
  for(const id of ['slidesModal','quizModal','resultsModal','helpModal']){
    $(id).addEventListener('click',e=>{if(e.target===$(id))closeModal(id);});
  }
  for(const id of ['prevButton','edgePrev'])$(id).onclick=()=>{goSlide(state.slide-1);showTools();};
  for(const id of ['nextButton','edgeNext'])$(id).onclick=()=>{goSlide(state.slide+1);showTools();};
  ['quizFloat','quizButton'].forEach(id=>$(id).onclick=openQuiz);
  $('slideListButton').onclick=()=>openModal('slidesModal');
  $('resultsButton').onclick=()=>openModal('resultsModal');
  $('helpButton').onclick=()=>openModal('helpModal');
  $('penButton').onclick=()=>setTool('pen');$('laserButton').onclick=()=>setTool('laser');
  $('undoButton').onclick=undoInk;$('clearButton').onclick=clearInk;
  $('zoomOut').onclick=()=>{setZoom(state.zoom-.25);showTools();};
  $('zoomIn').onclick=()=>{setZoom(state.zoom+.25);showTools();};
  $('zoomReset').onclick=()=>{resetZoom();showTools();};
  $('fullButton').onclick=fullscreen;
  $('toolsToggle').onclick=showTools;
  $('quizPrevious').onclick=()=>quizMove(-1);
  $('quizNext').onclick=()=>quizMove(1);
  $('quizCheck').onclick=checkAnswer;
  $('exportCSV').onclick=exportCSV;
  $('resetAnswers').onclick=()=>{if(window.confirm('Hapus seluruh hasil kuis di perangkat ini?')){state.answers={};store();renderResults();}};
  const hash=location.hash.match(/slide=(\d+)/);if(hash)state.slide=Math.min(TOTAL,Math.max(1,Number(hash[1])));
  window.addEventListener('keydown',e=>{
    if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;
    if(e.key==='Escape'&&activeModal()){closeModal(activeModal());return;}
    if(activeModal())return;
    if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();goSlide(state.slide+1);showTools();}
    else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();goSlide(state.slide-1);showTools();}
    else if(e.key.toLowerCase()==='k')openQuiz();
    else if(e.key.toLowerCase()==='f')fullscreen();
    else if(e.key.toLowerCase()==='t')showTools();
  });
  pointerGestures();goSlide(state.slide);showTools();
  setTimeout(()=>{$('gestureTip').hidden=true;},7000);
}
document.addEventListener('DOMContentLoaded',init);
