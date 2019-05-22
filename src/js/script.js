const tree = document.getElementById('tree');

function createTree(tree, data) {
  const ul = document.createElement('ul');
  tree.append(ul);
  for (const child in data) {
    const li = document.createElement('li');
    li.innerHTML = child;
    ul.append(li);

    if (Object.keys(data[child]).length > 0) {
      createTree(li, data[child]);
    }
  }
}

createTree(tree, {
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
