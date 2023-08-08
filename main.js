document.addEventListener('DOMContentLoaded', function () {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
  
    fetch('https://my-json-server.typicode.com/darlinmel/costosmatriculas/lista')
      .then((response) => response.json())
      .then(function (data) {
        gridOptions.api.setRowData(data);
      });
  });
  