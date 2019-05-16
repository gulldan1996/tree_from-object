var data = {
	"Рыбы": {
    "Форель": {},
    "Щука": {}
  },
  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
  	},
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

const tree = document.getElementById('tree');


function createTree(data, tree) {
	const ul = document.createElement('ul');
	for (let key in data) {
		const li = document.createElement('li');
		li.innerHTML = key;
		ul.append(li);
		createTree(data[key], li);
	}
	tree.append(ul);
}

createTree(data, tree);
