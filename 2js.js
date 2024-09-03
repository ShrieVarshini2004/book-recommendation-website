function navigateToPage(category) {
    document.body.innerHTML = ''; // Clear the current content

    const newPage = document.createElement('div');
    newPage.className = 'new-page';

    // Create the Back button
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.textContent = 'Back'; // This text will be replaced with an arrow due to CSS
    backButton.onclick = () => {
        document.body.innerHTML = `
            <header>
                <h1>Varshu's Library</h1>
            </header>

            <main>
                <!-- Filter Options -->
                <div class="filter">
                    <button onclick="navigateToPage('fictional')">Fictional</button>
                    <button onclick="navigateToPage('non-fictional')">Non-Fictional</button>
                </div>
            </main>
        `;
        // Reapply the styles
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = 'style.css';
        document.head.appendChild(styleLink);
        const script = document.createElement('script');
        script.src = 'scripts.js';
        script.defer = true;
        document.head.appendChild(script);
    };
    newPage.appendChild(backButton);

    const title = document.createElement('h2');
    title.textContent = category === 'fictional' ? 'Fictional' : 'Non-Fictional';
    newPage.appendChild(title);

    const authors = document.createElement('div');
    authors.className = 'authors';

    const authorsList = category === 'fictional' 
        ? ['Enid Blyton', 'Rick Riordan', 'Dan Brown'] 
        : ['Dale Carnegie', 'Robert Kiyosaki', 'James Clear'];

    authorsList.forEach(author => {
        const button = document.createElement('button');
        button.className = 'author-button';
        button.textContent = author;
        button.onclick = () => navigateToAuthorPage(category, author);
        authors.appendChild(button);
    });

    newPage.appendChild(authors);
    document.body.appendChild(newPage);
}

function navigateToAuthorPage(category, author) {
    document.body.innerHTML = ''; // Clear the current content

    const newPage = document.createElement('div');
    newPage.className = 'new-page';

    // Create the Back button
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.textContent = 'Back';
    backButton.onclick = () => navigateToPage(category);
    newPage.appendChild(backButton);

    // Title with background color matching the first page
    const title = document.createElement('h2');
    title.textContent = `Varshu's Library`;
    newPage.appendChild(title);

    // Subtitle with the specified color
    const subtitle = document.createElement('h3');
    subtitle.textContent = category === 'fictional' ? 'Fictional' : 'Non-Fictional';
    newPage.appendChild(subtitle);

    // Author name
    const authorTitle = document.createElement('h4');
    authorTitle.textContent = author;
    newPage.appendChild(authorTitle);

    const booksList = document.createElement('ul');
    let books;

    switch(author) {
        case 'Enid Blyton':
            books = [
                { title: 'Famous Five', review: 'A thrilling adventure series for children.', image: 'famous_five.jpg' },
                { title: 'Secret Seven', review: 'A mystery series that keeps you guessing.', image: 'secret_seven.jpg' },
                { title: 'The Secret Series', review: 'A series full of secrets and surprises.', image: 'secret_series.jpg' }
            ];
            break;
        case 'Rick Riordan':
            books = [
                { title: 'Percy Jackson', review: 'A modern twist on Greek mythology.', image: 'percy_jackson.jpg' },
                { title: 'Heroes of Olympus', review: 'An epic continuation of Percy Jackson\'s world.', image: 'heroes_of_olympus.jpg' },
                { title: 'Magnus Chase', review: 'A thrilling adventure in Norse mythology.', image: 'magnus_chase.jpg' }
            ];
            break;
        case 'Dan Brown':
            books = [
                { title: 'Angels and Demons', review: 'A fast-paced thriller with historical intrigue.', image: 'angels_and_demons.jpg' },
                { title: 'Inferno', review: 'A dark and gripping tale of Dante\'s Inferno.', image: 'inferno.jpg' },
                { title: 'Da Vinci Code', review: 'A worldwide bestseller full of mystery and suspense.', image: 'da_vinci_code.jpg' }
            ];
            break;
        case 'Dale Carnegie':
            books = [
                { title: 'How to Win Friends and Influence People', review: 'A timeless guide to interpersonal skills.', image: 'how_to_win_friends.jpg' }
            ];
            break;
        case 'Robert Kiyosaki':
            books = [
                { title: 'Rich Dad Poor Dad', review: 'A book on financial education and independence.', image: 'rich_dad_poor_dad.jpg' }
            ];
            break;
        case 'James Clear':
            books = [
                { title: 'Atomic Habits', review: 'A powerful guide to forming good habits.', image: 'atomic_habits.jpg' }
            ];
            break;
        case 'J.K. Rowling':
            books = [
                { title: 'Harry Potter', review: 'A magical journey through the wizarding world.', image: 'harry_potter.jpg' }
            ];
            break;
        case 'J.R.R. Tolkien':
            books = [
                { title: 'The Lord of the Rings', review: 'An epic fantasy saga.', image: 'lord_of_the_rings.jpg' }
            ];
            break;
        default:
            books = [];
    }

    books.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.textContent = book.title;

        const bookReview = document.createElement('p');
        bookReview.textContent = book.review;

        const bookImage = document.createElement('img');
        bookImage.src = book.image;
        bookImage.alt = book.title;

        booksList.appendChild(bookItem);
        booksList.appendChild(bookReview);
        booksList.appendChild(bookImage);
    });

    newPage.appendChild(booksList);
    document.body.appendChild(newPage);
}
