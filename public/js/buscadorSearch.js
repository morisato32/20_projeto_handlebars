// get the search query value from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('search');

// find the h4 element by class name and set its inner HTML
const searchResultsHeader = document.querySelector('.text-gradient');
searchResultsHeader.innerHTML = `Resultados da pesquisa para "${query}"`;