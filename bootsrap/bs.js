
const xPoint=document.querySelector('.navbar-toggler .simbol');
xPoint.style.display="none";
console.log(xPoint);
const toggle=document.querySelector('.navbar-toggler .navbar-toggler-icon');
toggle.addEventListener('click',()=>{
   toggle.style.transition="all 2s";
   toggle.style.display="none";
   xPoint.style.display="inline-block";
   
});
console.log(toggle)
xPoint.addEventListener('click',()=>{
   xPoint.style.display="none";
   toggle.style.display="inline-block";
});

// start Skill Blood for Blood//
const angka=document.querySelector('.skillbox .angka');
const skillUp=document.querySelector('.information-text .valuesT');
const skillDouwn=document.querySelector('.information-text .valuesK');
console.log(skillUp.textContent)

const tambahAngka=document.querySelector('.skillbox .tambah');


   tambahAngka.addEventListener('click',()=>{

      if(angka.textContent<=9){
         let jumlah =parseInt(angka.textContent)+1;
         angka.innerHTML=jumlah;
         let tambahSkill=(parseFloat(skillUp.textContent)+5.3);
         let tambahSkill1=tambahSkill.toFixed(2);
         skillUp.innerHTML=tambahSkill1; 
         let tambahSkillD=(parseFloat(skillDouwn.textContent)+0.3);
         let tambahSkill2=tambahSkillD.toFixed(2);
         skillDouwn.innerHTML=tambahSkill2;
         console.log(tambahSkill1)
      };
      
   });
 const kurangAngka=document.querySelector('.skillbox .kurang');

 kurangAngka.addEventListener('click', ()=>{
   if(angka.textContent>1){
      let jumlah =parseInt(angka.textContent)-1;
      angka.innerHTML=jumlah;
      let tambahSkill=(parseFloat(skillUp.textContent)-5.3);
      let tambahSkill1=tambahSkill.toFixed(2);
      skillUp.innerHTML=tambahSkill1; 
      let tambahSkillD=(parseFloat(skillDouwn.textContent)-0.3);
      let tambahSkill2=tambahSkillD.toFixed(2);
      skillDouwn.innerHTML=tambahSkill2;
      console.log(tambahSkill1)
   }
 });
// end skill Blood for Blood//

// start skill Zatoichi//

const tambahAngka1=document.querySelector('.skillbox .tambah1');
console.log(tambahAngka1);
const kurangAngka1=document.querySelector('.skillbox .kurang1');
const angka1=document.querySelector('.skillbox .angka1');
const skillUp1=document.querySelector('.information-text .valuesT1');
const skillD1=document.querySelector('.information-text .valuesK1');

tambahAngka1.addEventListener('click', ()=>{
   if(angka1.textContent<=9){
      let jumlah1=parseInt(angka1.textContent)+1;
      angka1.innerHTML=jumlah1;
      let tambahSkill2=parseFloat(skillUp1.textContent)+3.7;
      let skill2=tambahSkill2.toFixed(2);
      skillUp1.innerHTML=skill2;
      let cricalD=parseFloat(skillD1.textContent)+2.7;
      let skil=cricalD.toFixed(2);
      skillD1.innerHTML=skil;
   }
});

kurangAngka1.addEventListener('click', ()=>{
   if(angka1.textContent>1){
      let jumlah1=parseInt(angka1.textContent)-1;
      angka1.innerHTML=jumlah1;
      let tambahSkill2=parseFloat(skillUp1.textContent)-3.7;
      let skill2=tambahSkill2.toFixed(2);
      skillUp1.innerHTML=skill2;
      let cricalD=parseFloat(skillD1.textContent)-2.7;
      let skil=cricalD.toFixed(2);
      skillD1.innerHTML=skil;
   }
});
// end skill zatoichi//

// start skill scarlet flash//
const tambahAngka2=document.querySelector('.skillbox .tambah2');
console.log(tambahAngka1);
const kurangAngka2=document.querySelector('.skillbox .kurang2');
const angka2=document.querySelector('.skillbox .angka2');
const skillUp2=document.querySelector('.information-text .valuesT2');
const skillD2=document.querySelector('.information-text .valuesK2');

tambahAngka2.addEventListener('click', ()=>{
   if(angka2.textContent<=9){
      let jumlah1=parseInt(angka2.textContent)+1;
      angka2.innerHTML=jumlah1;
      let tambahSkill2=parseFloat(skillUp2.textContent)+4.7;
      let skill2=tambahSkill2.toFixed(2);
      skillUp2.innerHTML=skill2;
      let cricalD=parseFloat(skillD2.textContent)+2.7;
      let skil=cricalD.toFixed(2);
      skillD2.innerHTML=skil;
   }
});
kurangAngka2.addEventListener('click', ()=>{
   if(angka2.textContent>1){
      let jumlah1=parseInt(angka2.textContent)-1;
      angka2.innerHTML=jumlah1;
      let tambahSkill2=parseFloat(skillUp2.textContent)-4.7;
      let skill2=tambahSkill2.toFixed(2);
      skillUp2.innerHTML=skill2;
      let cricalD=parseFloat(skillD2.textContent)-2.7;
      let skil=cricalD.toFixed(2);
      skillD2.innerHTML=skil;
   }
});


      


