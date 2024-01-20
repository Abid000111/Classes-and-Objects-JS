const person = {
	name: "Abid",
	age: 23,
	class: "11th",
	canTalk: true,
	talk: function () {
		console.log(this.canTalk);
	}
};
console.log(person.talk());

console.log(typeof person);

let a = [1, 2, 3, 4];
console.log(typeof a);
