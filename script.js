//your JS code here. If required.
const student = {
	name:"ABC"
}
student.__proto__.getKeys=function(){
	return Object.keys(this)
}

