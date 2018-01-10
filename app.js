const notes = require('./notes.js')

const yargs = require('yargs');
console.log('yargs',yargs.argv);

const argv = yargs.argv;
var command = argv._[0];

//add
if (command === 'add') {
 notes.addNote(argv.title, argv.body);
}

//remove
if (command === 'remove') {
 notes.removeNote(argv.title, argv.body);
}

//delete
if (command === 'delete') {
 notes.deleteNote(argv.title, argv.body);
}

//list
if (command === 'list') {
 notes.listNote(argv.title, argv.body);
}
