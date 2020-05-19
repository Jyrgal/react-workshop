
class UI {
  addEventToList(event) {
    const list = document.getElementById('event-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${event.name}</td>
      <td>${event.host}</td>
      <td>${event.date}</td>
      <td><a href="#" class="delete">X<a></td>
    `;
  
    list.appendChild(row);
  }

  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#event-form');
    container.insertBefore(div, form);

    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteEvent(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('host').value = '';
    document.getElementById('date').value = '';
  }
}