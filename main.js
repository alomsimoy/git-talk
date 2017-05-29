var html = require('yo-yo');
var root = document.body.appendChild(document.createElement('div'));

var names = [
  'Alex Piqueras',
  'Leandro Gartner',
  'Jorge Cortés',
  'Marc Parets',
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
