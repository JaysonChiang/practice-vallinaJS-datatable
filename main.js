
function shuffle(array) {


}

var order = function () {
  var data = DATA_TABLE.sort(function (a, b) {
    return a.price - b.price;
  });
  render(data);
}

var render = function (data) {
  $tbody = document.querySelector('.table').tBodies[0];

  var $rowSet = data.map(function (item) {
    var $row = document.createElement('tr');
    var $tdID = document.createElement('td');
    var $tdName = document.createElement('td');
    var $tdPrice = document.createElement('td');
    $tdID.textContent = item.id;
    $tdName.textContent = item.name;
    $tdPrice.textContent = item.price;
    $row.appendChild($tdID);
    $row.appendChild($tdName);
    $row.appendChild($tdPrice);
    return $row;
  });


  var $frag = document.createDocumentFragment();
  $rowSet.forEach(function (item) {
    $frag.appendChild(item);
  });

  $tbody.innerHTML = ''
  $tbody.appendChild($frag);

}


var $btnOrder = document.querySelector('#btnOrder');
$btnOrder.onclick = order;

render(DATA_TABLE);
