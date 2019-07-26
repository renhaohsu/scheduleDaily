sidebar = document.getElementById("sidebar")
header = document.getElementById("header")
my_btn = document.getElementById("my_btn")
sidebarRight = document.getElementById("sidebarRight")

d = new Date
let nowTime = document.querySelector('.nowTime')
nowTime.innerText = d.getMonth() + 1 + " / " + d.getDate() +" / "+ d.getFullYear()




var appearValue = false

//  open side bar
my_btn.onclick = function() { 
  	if(!appearValue){
			//  RWD
			if (document.body.clientWidth < 425) {
				console.log(document.body.clientWidth)
						
				sidebar.style.width = document.body.clientWidth * 0.7 + 'px'
				appearValue = true
				console.log(appearValue)
				sidebarRight.style.display = 'block'
				sidebarRight.style.pointerEvents = 'auto'
				sidebarRight.style.width = document.body.clientWidth * 0.3 + 'px'
	
			} else {				
				sidebar.style.width = document.body.clientWidth * 0.3 + 'px'
				appearValue = true
				console.log(appearValue)
				sidebarRight.style.display = 'block'
				sidebarRight.style.pointerEvents = 'auto'
				sidebarRight.style.width = document.body.clientWidth * 0.7 + 'px'
	
			}    //會出問題 拉動瀏覽器的框框時 他的值不會跟著改變 (等等找吳哲的canvas課有寫一個調整寬度用的resize function
	}
}

sidebarRight.onclick = function() {
	if (appearValue) {
		sidebar.style.width = "0px"
    	appearValue = false
    	console.log(appearValue)
    	sidebarRight.style.display = 'none'
    	sidebarRight.style.pointerEvents = 'none'
	}
}