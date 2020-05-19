class Event {
  constructor(name, host, date) {
    this.name = name;
    this.host = host;
    this.date = date;
  }
}

document.addEventListener('DOMContentLoaded', Store.displayEvents);

document.getElementById('event-form').addEventListener('submit', function(e){
  const name = document.getElementById('name').value,
        host = document.getElementById('host').value,
        date = document.getElementById('date').value

  const event = new Event(name, host, date);

  const ui = new UI();

  console.log(ui);

  if(name === '' || host === '' || date === '') {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    ui.addEventToList(event);

    Store.addEvent(event);

    ui.showAlert('Event Added!', 'success');
  
    ui.clearFields();
  }

  e.preventDefault();
});


document.getElementById('event-list').addEventListener('click', function(e){
  const ui = new UI();

  ui.deleteEvent(e.target);

  Store.removeEvent(e.target.parentElement.previousElementSibling.textContent);

  ui.showAlert('Event Removed!', 'success');

  e.preventDefault();
});