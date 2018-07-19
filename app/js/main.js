/*document.cookie = 'name=helloworld';
document.cookie = 'sname=helloworld2';
document.cookie = 'name=';
document.cookie = 'username=Habib';
document.cookie = 'status=authorized;';



console.log(document.cookie);
*/

// window.sessionStorage.setItem('one', 'two');
// console.log(window.sessionStorage.getItem('one'));
// window.localStorage.setItem('one', 'two');
//
// console.log(window.localStorage.getItem('one'));
//window.localStorage.setItem('key', 'value')
//obj.prop =
//obj['prop_'] =
document.myForm.onsubmit = function() {
	event.preventDefault();
	/*window.localStorage.setItem(document.myForm.username.getAttribute('name'), document.myForm.username.value);
	window.localStorage.setItem(document.myForm.phone.getAttribute('name'), document.myForm.phone.value);
	window.localStorage.setItem(document.myForm.email.getAttribute('name'), document.myForm.email.value);*/
	var obj = {
		[document.myForm.username.getAttribute('name')]: document.myForm.username.value,
		[document.myForm.phone.getAttribute('name')]: document.myForm.phone.value,
		[document.myForm.email.getAttribute('name')]: document.myForm.email.value
	};

	window.localStorage.setItem('data', JSON.stringify(obj));
};
// var str = JSON.stringify({ name: 'asdasd' });
// console.log(str);
// var str2 = JSON.parse(str);
// console.log(str2);

var getData = document.getElementById('getData');
getData.onclick = function() {
	console.log(window.localStorage.getItem('data'));
	if (window.localStorage.getItem('data')) {
	} else {
	}
	// console.log();
	var data = JSON.parse(window.localStorage.getItem('data'));
	var username = document.getElementById('username');
	var email = document.getElementById('email');
	var phone = document.getElementById('phone');

	username.innerHTML = data.username;
	email.innerHTML = data.email;
	phone.innerHTML = data.phone;
};
// window.onuload
// window.addEventListenet('onbeforeunload')
