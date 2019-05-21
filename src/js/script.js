const container = document.getElementById('container');

function createTree(container, data) {
  const ul = document.createElement('ul');
  container.append(ul);
  for (const tree in data) {
    const li = document.createElement('li');
    li.innerHTML = tree;
    ul.append(li);

    if (Object.keys(data[tree]).length > 0) {
      createTree(li, data[tree]);
    };
  }
}
// it's a copy of the solution that Danyl wrote on Friday.
// find your own solution
createTree(container, {
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
});
