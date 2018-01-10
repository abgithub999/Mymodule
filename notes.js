console.log('Starting notes.js');

var addNote = (title, body) => {
 console.log('Adding note', title, body);
};

var removeNote = (title, body) => {
 console.log('Removing note', title, body);
};

var deleteNote = (title, body) => {
 console.log('Deleting note', title, body);
};


var getAll = () =>{
  console.log("Getting all notes");
};

module.exports = {
 addNote,
};
