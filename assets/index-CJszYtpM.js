(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{question:`console.log(2 + 2);`,answers:[`22`,`4`,`undefined`,`ошибка`],questionId:`question1`,correctAnswer:`4`},{question:`Как объявить переменную в JavaScript?`,answers:[`create x = 5`,`var x = 5 / let x = 5 / const x = 5`,`make x = 5`,`int x = 5`],questionId:`question2`,correctAnswer:`var x = 5 / let x = 5 / const x = 5`},{question:`Что делает console.log()?`,answers:[`Удаляет данные`,`Показывает сообщение в консоли`,`Создаёт переменную`,`Останавливает программу`],questionId:`question3`,correctAnswer:`Показывает сообщение в консоли`},{question:`Что вернёт выражение? '5 > 3'`,answers:[`false`,`true`,`null`,`undefined`],questionId:`question4`,correctAnswer:`true`}];function t(e,t){let n=document.createElement(`label`);n.textContent=e;let r=document.createElement(`input`);return r.type=`radio`,r.name=t,r.value=e,n.prepend(r),n.className=`
  flex items-center gap-2 
  p-2 rounded-lg 
  cursor-pointer 
  transition-colors
  text-gray-800 dark:text-gray-100
  hover:bg-gray-100 dark:hover:bg-gray-600
`,r.className=`accent-blue-500`,n}function n(e){let n=document.createElement(`div`);n.dataset.questionId=e.questionId;let r=document.createElement(`h3`);r.textContent=e.question,n.append(r);let i=document.createElement(`div`),a=document.createElement(`p`);return a.textContent=``,i.append(a),e.answers.forEach(r=>{n.append(t(r,e.questionId))}),n.append(i),n.className=`
    border 
    border-gray-200 dark:border-gray-700 
    rounded-xl 
    p-4 
    space-y-3 
    bg-gray-50 dark:bg-gray-700 
    transition
`,r.className=`
    font-semibold 
    text-gray-800 dark:text-gray-100
`,i.className=`
    question-block__error 
    text-sm 
    mt-2 
    min-h-[1.25rem]
`,n}function r(e,t,n){let r=0,i=document.createElement(`h3`),a=t.querySelectorAll(`input[type="radio"]`),o={};a.forEach(e=>{e.checked&&(o[e.name]=e.value)}),n.forEach(e=>{let n=o[e.questionId],i=t.querySelector(`div[data-question-id=${e.questionId}]`),a=i.querySelector(`.question-block__error p`);i.classList.remove(`border-red-400`,`border-yellow-400`,`border-green-400`,`bg-red-50`,`bg-yellow-50`,`bg-green-50`,`dark:bg-red-900/20`,`dark:bg-yellow-900/20`,`dark:bg-green-900/20`),a.textContent=``,n?n===e.correctAnswer?(r++,i.classList.add(`border-green-400`,`bg-green-50`,`dark:bg-green-900/20`)):(a.textContent=`Не верный ответ`,a.className=`text-red-500 text-sm`,i.classList.add(`border-red-400`,`bg-red-50`,`dark:bg-red-900/20`),a.classList.add(`animate-pulse`)):(a.textContent=`Вы не выбрали ни один из ответов`,a.className=`text-yellow-500 text-sm`,i.classList.add(`border-yellow-400`,`bg-yellow-50`,`dark:bg-yellow-900/20`),a.classList.add(`animate-pulse`))}),n.length===Object.keys(o).length?i.textContent=`Набрано баллов: ${r} из ${n.length}`:i.textContent=`Вы ответили не на все вопросы`,e.innerHTML=``,e.append(i)}var i=document.createElement(`button`);i.textContent=`🌙`,i.addEventListener(`click`,()=>{document.documentElement.classList.toggle(`dark`),document.documentElement.classList.contains(`dark`)?i.textContent=`☀️`:i.textContent=`🌙`});var a=document.getElementById(`app`),o=document.getElementById(`score`),s=document.createElement(`form`),c=document.createElement(`h2`);c.textContent=`Опрос по JS`;var l=document.createElement(`button`);l.type=`button`,l.textContent=`Проверить`,s.append(c),e.forEach(e=>{s.append(n(e))}),s.append(l),l.addEventListener(`click`,()=>r(o,s,e)),a.append(s),a.append(i),a.className=`
  min-h-screen 
  flex flex-col items-center justify-center 
  gap-6
  bg-gray-100 dark:bg-gray-900 
  transition-colors
`,o.className=`
  mt-6 
  text-center 
  text-lg 
  font-semibold 
  order-1
  text-gray-800 dark:text-gray-100
`,s.className=`
  w-full max-w-xl 
  bg-white dark:bg-gray-800 
  p-8 
  rounded-2xl 
  shadow-xl 
  space-y-6 
  transition-colors
`,c.className=`
  text-2xl font-bold text-center 
  text-gray-800 dark:text-gray-100
`,l.className=`
  w-full 
  bg-blue-500 
  text-white 
  py-2 
  rounded-lg 
  font-medium
  hover:bg-blue-600 
  active:scale-95 
  transition
`,i.className=`
  fixed top-4 right-4
  bg-white dark:bg-gray-800
  text-gray-800 dark:text-gray-100
  px-3 py-2 rounded-lg shadow
  hover:scale-105 transition
`;