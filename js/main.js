// let lessonInput = document.querySelector('input[name="text"]')
// let lessonText = document.querySelector('.lessonText')


const add_btn = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = (todo='別緊張 時間還很多') => {
  const html = `
	<div class="container">	
		<p class="title"> 步驟：</p>
		<input type="text" name="text" class="lesson" placeholder=" ${todo} ">

		<div class="lesson lessonText" hidden>${todo}</div>
	</div>
  `;
  list.innerHTML += html;
};



// log = document.querySelector('#log');
list.addEventListener('click', showtarget, false);
function showtarget(ev) {  var target = ev.target;
	// console.log(target.className)
  if (target.tagName === 'INPUT' && target.className === 'lesson') {
    // console.log(target.value)
    // console.log(target.parentNode.children[1])
	target.addEventListener('keyup', function (e) {
		// console.log(e.key)
		if (e.key == 'Enter') {
			target.parentNode.children[2].innerText = target.value
			target.parentNode.children[2].hidden = false
			target.hidden = true
		}
	})

  }
  if (target.tagName === 'LI') {
    // log.innerHTML = 'A list item';
  }
  if (target.tagName === 'UL') {
    // log.innerHTML = 'The list itself';
  }
}





// function handleButtonRWD(){
// 	let button = document.querySelector('.say')
// 	if (window.innerWidth < 680) {				
// 		// button.style.color = 'red'
// 		button.innerText = "☝ 詠唱"
// 	} else {
// 		button.innerText = "☝ 詠唱╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ"
// 	}
// }

// 載入 縮放的事件
// window.addEventListener("load", handleButtonRWD);
// window.addEventListener("resize", handleButtonRWD);


// Firebase Firestore

//  TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#config-web-app 

  // Your web app's Firebase configuration
var firebaseConfig = {
	projectId: "scheduledmy-ac9de",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// 接上firebase
const db = firebase.firestore();

// 放在這裡的資料
let localData = [];

//第一次載入資料庫時顯示所有內容
db.collection('daily').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		d = {...doc.data()}
		// console.log(doc.data().chapterA)
		for (const key in doc.data()) {
			// console.log(key)
			// console.log(doc.data().key)
			k = key + ""
			// console.log(doc.data()[k])
			// console.log(d[k])
			generateTemplate(d[k])		
			localData.push(d[k])
		}
	})
})

// 存東西到firebase
add_btn.addEventListener('click', e => {  
  // e.preventDefault();
	generateTemplate();
	// var s = localdata.length
	// db.collection('daily').add({
	// 	chapter: chapter
	// })
});



// 等等放進文字
var words = [];