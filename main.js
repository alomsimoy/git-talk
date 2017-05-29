var html = require('yo-yo');
var root = document.body.appendChild(document.createElement('div'));

var names = [
  'Andreu Llabres',
  'Alex Piqueras',
  'David Llobell',

  'Jose Luis Alvarez',
  'Enric Gonzalez',
  'Leandro Gartner',
  'Jorge Cortés',
  'Javier Marín'
];

var list = names.map(function (name) {
  return html`<li>${name}</li>`;
});

html.update(
  root,
  html`<div>
    <h2>Nombres</h2>
    <ul>
    ${list}
    </ul>
  </div>`
);
