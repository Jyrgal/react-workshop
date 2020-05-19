class Store {
  static getEvents() {
    let events;
    if(localStorage.getItem('events') === null) {
      events = [];
    } else {
      events = JSON.parse(localStorage.getItem('events'));
    }

    return events;
  }

  static displayEvents() {
    const events = Store.getEvent();

    events.forEach(function(event){
      const ui  = new UI;

      ui.addEventToList(event);
    });
  }

  static addEvent(event) {
    const events = Store.getEvents();

    events.push(event);

    localStorage.setItem('events', JSON.stringify(events));
  }

  static removeEvent(name) {
    const events = Store.getEvents();

    events.forEach(function(event, index){
     if(event.name === name) {
      events.splice(index, 1);
     }
    });

    localStorage.setItem('events', JSON.stringify(events));
  }
}