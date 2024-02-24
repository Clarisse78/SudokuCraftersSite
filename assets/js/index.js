function drop(ev) {
  ev.preventDefault();
  var targetElement = ev.target;

  if (targetElement.classList.contains("grid")) {
    var mouseX = ev.clientX;
    var mouseY = ev.clientY;

    var changeElement = document.elementFromPoint(mouseX, mouseY);
    if (!changeElement.classList.contains('grid')) {
      changeElement = changeElement.parentNode;
      if (!changeElement.classList.contains('grid')) {
        return;
      }
    }


    if (targetElement !== changeElement) {
      for (let i = 0; i < 12; i++) {
        if (targetElement.childNodes[i].innerHTML != null) {
          var tempHTML = targetElement.childNodes[i].innerHTML;
          targetElement.childNodes[i].innerHTML = changeElement.childNodes[i].innerHTML;
          changeElement.childNodes[i].innerHTML = tempHTML;
         // console.log(targetElement.childNodes[i].innerHTML + " NewElement " + changeElement.childNodes[i].innerHTML);
        }
      }
    }
  }
}

function addPlay() {
  var elements = document.querySelectorAll(".grid:not(.notplay)");
  var elements2 = document.querySelectorAll(".grid");
  elements.forEach(function (element) {
    element.classList.toggle("play");
  });
  elements2.forEach(function (element) {
    if (element.draggable === true) {
      element.draggable = false;
    } else {
      element.draggable = true;
    }
  });
}

var actual = document.getElementById('home');
var actual_play = document.getElementById('grid5');
var viewObj = { key: "view", value: "grid1" };
var homeObj = { key: "home", value: "grid5" };
var aboutObj = { key: "about", value: "grid3" };
var docsObj = { key: "docs", value: "grid7" };
var toolsObj = { key: "tools", value: "grid9" };
var demoObj = { key: "demo", value: "grid8" };
var pictObj = { key: "pictures", value: "grid2" };


function changePage(name) {
 // console.log(name.key);
  //console.log(name.value);

  var def = document.getElementById(name.key);
  var def_play = document.getElementById(name.value);

  if (def != actual) {
    def.classList.remove("hidden");
    def_play.classList.add("play-hover")

    actual.classList.add("hidden");
    actual_play.classList.remove("play-hover")
    actual = def;
    actual_play = def_play;
  }

}














document.addEventListener('DOMContentLoaded', function () {
  const cells = document.querySelectorAll('.cell');


function solveSudoku(grid) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === '') {
          for (let num = 1; num <= 9; num++) {
            if (isValid(grid, row, col, num)) {
              grid[row][col] = num;
              if (solveSudoku(grid)) {
                return true;
              }
              grid[row][col] = '';
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  function displaySudoku(grid) {

    let index = 0;

    for (let gridrow = 0; gridrow < 9; gridrow += 3) {
      for (let gridcol = 0; gridcol < 9; gridcol += 3) {
        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            if (cells[index] != null) {
              cells[index].textContent = grid[row + gridrow][col + gridcol];
              //console.log( grid[row + gridrow][col + gridcol] + " Index " + index + " Row " + row + " Col " + col + " GridRow " + gridrow + " GridCol" + gridcol + "cells " + cells[index].textContent + " parent " + cells[index].parentNode.id);
              index++;
            }

          }
        }
      }
    }
}

function isValid(grid, row, col, num) {
  for (let x = 0; x < 9; x++) {
      if (grid[row][x] === num) {
        return false;
      }
    }

    for (let x = 0; x < 9; x++) {
      if (grid[x][col] === num) {
        return false;
      }
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[startRow + i][startCol + j] === num) {
          return false;
        }
      }
    }

    return true;
  }

  function generateValidSudoku() {
    const grid = [];
    for (let i = 0; i < 9; i++) {
      const row = [];
      for (let j = 0; j < 9; j++) {
        row.push('');
      }
      grid.push(row);
    }

    for (let i = 0; i < 45; i++) { 
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      const num = Math.floor(Math.random() * 9) + 1;
      if (isValid(grid, row, col, num)) {
        grid[row][col] = num;
      }
    }
   // console.log(grid);

    //solveSudoku(grid);
    displaySudoku(grid);
    //console.log(grid);
  }

  generateValidSudoku();


});


// Fonction pour ouvrir une image en grand
function openPicture(imagePath) {
  // Ouvrir l'image principale dans une nouvelle fenêtre
  window.open(imagePath);
}