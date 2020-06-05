function buildSummaryTable(class_selector,property_selectors,min_prop_nr,target) {

  var rows = document.querySelectorAll(class_selector);
  var table = document.getElementById(target).getElementsByTagName('tbody')[0];

console.log('Classes: ' + rows.length);

  for (var i = 0; i < rows.length; i++) {
    console.log(i);

    var id = rows[i].getAttribute('id');
    var cells = rows[i].querySelectorAll('td');
    var prop = '';
    if (cells[0].getElementsByTagName('a')[0]) {
      prop = cells[0].getElementsByTagName('a')[0].getAttribute('href');
    }
    var name = cells[0].textContent.trim();
    var uri = cells[2].textContent.trim();
    var prop_nr = 0;
    if (prop != '') {
      for (var j = 0; j < property_selectors.length; j++) {
        prop_nr += document.querySelectorAll(prop + ' ' + property_selectors[j]).length;
      }
    }

console.log('Index: ' + i);
console.log(name + ': ' + prop_nr);
console.log(i);

    if (prop_nr >= min_prop_nr) {

console.log(prop_nr >= min_prop_nr);
console.log(i);

      var row = table.insertRow(i);
      var prefix = '';
      if (name.startsWith('+')) {
        name = name.substr(1);
        prefix = '+';
      }
      var cName = row.insertCell(0);
      cName.innerHTML = prefix + '<a href="#' + id + '">' + name + '</a>';
      var cURI = row.insertCell(1);
      cURI.innerHTML = '<code>' + uri + '</code>';
 
      for (var j = 0, k = 2; j < property_selectors.length; j++, k++) {
        var c = row.insertCell(k);
        if (prop != '') {
          var prows = document.querySelectorAll(prop + ' ' + property_selectors[j]), pi;
          var cont = '';
          for (pi = 0; pi < prows.length; pi++) {
            var pid = prows[pi].getAttribute('id');
            var pcells = prows[pi].querySelectorAll('td'), pj;
            var pname = pcells[0].textContent.trim();
            var puri = pcells[1].textContent.trim();
            var prefix = '';
            if (pname.startsWith('+')) {
              prefix = '+';
            }
            cont += '<p>' + prefix + '<a title="' + pname + '" href="#' + pid + '"><code>' + puri + '</code></a></p>\n';
          }
          c.innerHTML = cont;
        }
      }
    }
  }
};
	
//document.addEventListener("DOMContentLoaded", () => {
$(document).ready( function() {

waitForEl('#maintenance-information---not-in-iso19115-core', function() {

  var class_selector = '#classes tr:not(.deprecated).class';
  var property_selectors = new Array();
  property_selectors[0] = 'tr:not(.deprecated).property.mandatory';
  property_selectors[1] = 'tr:not(.deprecated).property.recommended';
  property_selectors[2] = 'tr:not(.deprecated).property.optional';
  var min_prop_nr = 0;
  var target = 'table-quick-reference-of-classes-and-properties';

  buildSummaryTable(class_selector,property_selectors,min_prop_nr,target);

  var class_selector = '#classes tr:not(.deprecated).class';
  var property_selectors = new Array();
  property_selectors[0] = 'tr:not(.deprecated).property.mandatory.ap-ext';
  property_selectors[1] = 'tr:not(.deprecated).property.recommended.ap-ext';
  property_selectors[2] = 'tr:not(.deprecated).property.optional.ap-ext';
  var min_prop_nr = 0;
  var target = 'table-geodcat-ap-classes-and-properties';

  buildSummaryTable(class_selector,property_selectors,min_prop_nr,target);

/*
  var rows = document.querySelectorAll('#classes tr:not(.deprecated).class'), i;
  var table = document.getElementById('table-quick-reference-of-classes-and-properties').getElementsByTagName('tbody')[0];

  for (i = 0; i < rows.length; i++) {
    var id = rows[i].getAttribute('id');
    var row = table.insertRow(i);
    var cells = rows[i].querySelectorAll('td'), j;
    var name = cells[0].textContent.trim();
    var prop = '';
    if (cells[0].getElementsByTagName('a')[0]) {
      prop = cells[0].getElementsByTagName('a')[0].getAttribute('href');
    }
//    var prop = cells[0].getAttribute('href');
	  console.log(name + ' ' + prop)
    var uri = cells[2].textContent.trim();
    var prefix = '';
    if (name.startsWith('+')) {
      name = name.substr(1);
      prefix = '+';
    }
    var cName = row.insertCell(0);
    cName.innerHTML = prefix + '<a href="#' + id + '">' + name + '</a>';
    var cURI = row.insertCell(1);
    cURI.innerHTML = '<code>' + uri + '</code>';
    var cMP = row.insertCell(2);
    var cRP = row.insertCell(3);
    var cOP = row.insertCell(4);
 
    if (prop != '') {

      var prows = document.querySelectorAll(prop + ' tr:not(.deprecated).property.mandatory'), pi;
      var cont = '';
      for (pi = 0; pi < prows.length; pi++) {
        var pid = prows[pi].getAttribute('id');
        var pcells = prows[pi].querySelectorAll('td'), pj;
        var pname = pcells[0].textContent.trim();
        var puri = pcells[1].textContent.trim();
        var prefix = '';
        if (pname.startsWith('+')) {
          prefix = '+';
        }
        cont += '<p>' + prefix + '<a title="' + pname + '" href="#' + pid + '"><code>' + puri + '</code></a></p>\n';
      }
      cMP.innerHTML = cont;

      var prows = document.querySelectorAll(prop + ' tr:not(.deprecated).property.recommended'), pi;
      var cont = '';
      for (pi = 0; pi < prows.length; pi++) {
        var pid = prows[pi].getAttribute('id');
        var pcells = prows[pi].querySelectorAll('td'), pj;
        var pname = pcells[0].textContent.trim();
        var puri = pcells[1].textContent.trim();
        var prefix = '';
        if (pname.startsWith('+')) {
          prefix = '+';
        }
        cont += '<p>' + prefix + '<a title="' + pname + '" href="#' + pid + '"><code>' + puri + '</code></a></p>\n';
      }
      cRP.innerHTML = cont;

      var prows = document.querySelectorAll(prop + ' tr:not(.deprecated).property.optional'), pi;
      var cont = '';
      for (pi = 0; pi < prows.length; pi++) {
        var pid = prows[pi].getAttribute('id');
        var pcells = prows[pi].querySelectorAll('td'), pj;
        var pname = pcells[0].textContent.trim();
        var puri = pcells[1].textContent.trim();
        var prefix = '';
        if (pname.startsWith('+')) {
          prefix = '+';
        }
        cont += '<p>' + prefix + '<a title="' + pname + '" href="#' + pid + '"><code>' + puri + '</code></a></p>\n';
      }
      cOP.innerHTML = cont;

    }
*/
/*
    for (j = 0; j < cells.length; j++) {
      var cell = row.insertCell(j);
      cell.innerHTML = cells[j].innerHTML;
    }
*/
/*
  }
*/
/*
  var rows = document.querySelectorAll('tr:not(.deprecated).property.ap-ext'), i;
  var table = document.getElementById('table-geodcat-ap-classes-and-properties').getElementsByTagName('tbody')[0];

  for (i = 0; i < rows.length; i++) {
    var row = table.insertRow(i);
    var cells = rows[i].querySelectorAll('td'), j;
    for (j = 0; j < cells.length; j++) {
      var cell = row.insertCell(j);
      cell.innerHTML = cells[j].innerHTML;
    }
  }
*/
  var rows = document.querySelectorAll('tr.deprecated'), i;
  var table = document.getElementById('table-deprecated-classes-and-properties').getElementsByTagName('tbody')[0];

  var id = rows[0].getAttribute('id');

  for (i = 0; i < rows.length; i++) {
    var row = table.insertRow(i);
    var cells = rows[i].querySelectorAll('td'), j;
    for (j = 0; j < cells.length; j++) {
      var cell = row.insertCell(j);
      cell.innerHTML = cells[j].innerHTML;
      if (j == 0) {
        cell.innerHTML = '<a href="#' + id + '">' + cells[j].innerHTML + '</a>';
      }
    }
  }
});

});
var waitForEl = function(selector, callback) {
  if (jQuery(selector).length) {
    callback();
  } else {
    setTimeout(function() {
      waitForEl(selector, callback);
    }, 100);
  }
};
