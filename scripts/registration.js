// JavaScript Document

// Begin Functions

function populateBreeds() {
	$.ajax({
		url: "https://api.thedogapi.com/v1/breeds?api_key=e5a7d34e-abed-4bdf-80e2-2f1fd529fa6d",
		method: "GET"
	}).then(function (response) {
		//console.log(response);

		for (var i = 0; i < response.length; i++) {
			var option = $('<option>');
			option.attr('value', response[i].name);
			option.text(response[i].name);

			$('#dogBreed').append(option);
		}

		$('#dogBreed').val('Cardigan Welsh Corgi');
	});
}

function storeUser(e){
	e.preventDefault();
	
	user.push(userName.val());
	user.push(dogName.val());
	user.push(dogAge.val());
	user.push(dogBreed.val());
	user.push(dogGender.val());
	
	localStorage.setItem('user',JSON.stringify(user));
	
	registerContainer.hide('fast');
	mainContainer.show('slow');
	
	fillUserData();
}

function fillUserData(){
	user = JSON.parse(localStorage.getItem('user'));
	
	userDataName.text(user[0])
	userDataPetName.text(user[1]);
	userDataPetAge.text(user[2]);
	userDataPetBreed.text(user[3]);
	userDataPetGender.text(user[4]);
}

// Begin Variables

const mainContainer = $('#mainContainer');
const registerContainer = $('#registerContainer');
const registerForm = $('#registerForm');
const userName = $('#userName');
const dogName = $('#dogName');
const dogAge = $('#dogAge');
const dogBreed = $('#dogBreed');
const dogGender = $('#dogGender');

const userDataName = $('#userNameDisplay');
const userDataPetName = $('#pet-name');
const userDataPetAge = $('#pet-age');
const userDataPetBreed = $('#pet-breed');
const userDataPetGender = $('#pet-gender');

var user = [];

// Begin Calls

if(localStorage.getItem('user')){
	mainContainer.show();
	registerContainer.hide();
	fillUserData();
} else {
	mainContainer.hide();
}

registerForm.on('submit',storeUser);

populateBreeds();