const checkboxFilters = document.querySelectorAll('.checkboxFilter');
const rows = document.querySelectorAll('tbody tr');

checkboxFilters.forEach(function (checkboxFilter) {
  checkboxFilter.addEventListener('change', function (event) {

    let filters = window.localStorage.getItem('townFilters');
    const checkbox = event.target;
    let townName = checkbox.getAttribute('id');

    if (filters == null) {
      filters = [];
    } else {
      filters = filters.split(',')
    }

    if (checkbox.checked == true) {
      filters.push(townName);
    } else {
      let index = filters.indexOf(townName);
      if (index > -1) {
        filters.splice(index)
      }
    }

    doFilter(filters);

    window.localStorage.setItem('townFilters', filters.join());
  });
});

function doFilter(filters) {
  rows.forEach(row => {
    var town = row.querySelector('.town');
    console.log(town)
    var townName = town.getAttribute('data-town')

    if (!filters.includes(townName)) {
      row.style.display = 'none'
    } else {
      (row.style.display = 'table-row')
    }
  })
}