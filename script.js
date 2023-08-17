//your code here
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Aerosmith', 'The Beatles', 'Red Hot Chili Peppers', 'Nirvana'];

const articles = ['a', 'an', 'the'];

// Function to remove articles from a band name
function removeArticles(name) {
    for (let article of articles) {
        if (name.toLowerCase().startsWith(article + ' ')) {
            return name.substring(article.length + 1); // +1 to remove the space after the article
        }
    }
    return name;
}

// Sort the band names without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Create the HTML list
let ul = document.createElement('ul');
ul.setAttribute('id', 'band');

for (let name of bandNames) {
    let li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
}

// Append the list to the body of the document
document.body.appendChild(ul);

