window.addEventListener('DOMContentLoaded', function () {
	loadData();

});

function loadData(){
$.getJSON("../../data.json", function(data){

		// console.log(data);

		generateWebsites(data);

});
}

function generateWebsites(){

let source = $("#website-template").html();
let template = Handlebars.compile(source);
let result = template(data);
let list = $(".website-list");

list.append(result);


}
