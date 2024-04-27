function toggleMenu() {
  const nav = document.getElementById('menu');
  nav.classList.toggle('active');
}






document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll('.xcontainer');

  containers.forEach(container => {
    const items = Array.from(container.querySelectorAll(".item"));
    const showMoreBtn = container.nextElementSibling;

    if (items.length > 5) {
      showMoreBtn.style.display = 'block'; // Show "Show More" button if there are more than 5 items

      items.forEach((item, index) => {
        if (index >= 5) {
          item.style.display = 'none'; // Initially hide extra items beyond the visible limit
        }
      });

      showMoreBtn.addEventListener('click', function() {
        items.forEach((item, index) => {
          if (index >= 5) {
            item.style.display = item.style.display === 'none' ? 'block' : 'none'; // Toggle display of extra items
          }
        });
        showMoreBtn.style.display = 'none'; // Hide "Show More" button after clicking

        const allItems = Array.from(container.querySelectorAll(".item"));
        const numPages = Math.ceil(allItems.length / 10); // Calculate the number of pages

        let currentPage = 1; // Track current page

        function showItems(page) {
          allItems.forEach((item, index) => {
            const isVisible = index >= (page - 1) * 10 && index < page * 10; // Determine if item should be visible on current page
            item.style.display = isVisible ? 'block' : 'none';
          });
        }

        // Initial display
        showItems(currentPage);

        // Create pagination UI
        const paginationContainer = document.createElement('div');
        paginationContainer.classList.add('pagination');

        for (let i = 1; i <= numPages; i++) {
          const pageBtn = document.createElement('button');
          pageBtn.textContent = i;
          pageBtn.classList.add('page-btn'); // Add class for styling
          pageBtn.addEventListener('click', function () {
            currentPage = i;
            showItems(currentPage);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
          });
          paginationContainer.appendChild(pageBtn);
        }

        container.appendChild(paginationContainer);

        // Create previous and next buttons container
        const prevNextContainer = document.createElement('div');
        prevNextContainer.classList.add('prev-next-buttons'); // Add class for styling

        // Create previous button
        const prevBtn = document.createElement('button');
        prevBtn.textContent = 'Previous';
        prevBtn.classList.add('prev-next-btn'); // Add class for styling
        prevBtn.addEventListener('click', function () {
          if (currentPage > 1) {
            currentPage--;
            showItems(currentPage);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
          }
        });
        prevNextContainer.appendChild(prevBtn);

        // Create next button
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next';
        nextBtn.classList.add('prev-next-btn'); // Add class for styling
        nextBtn.addEventListener('click', function () {
          if (currentPage < numPages) {
            currentPage++;
            showItems(currentPage);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
          }
        });
        prevNextContainer.appendChild(nextBtn);

        // Append the previous and next buttons container to the main container
        container.appendChild(prevNextContainer);
      });
    } else {
      showMoreBtn.style.display = 'none'; // Hide "Show More" button if there are 5 or fewer items
    }
  });
});














const xcontainer = document.getElementById('xcontainer');
    let isScrolling = false;

    xcontainer.addEventListener('scroll', () => {
      isScrolling = true;
      setTimeout(() => {
        isScrolling = false;
      }, 100); // Adjust the delay as needed
    });

    function scrollItems() {
      if (!isScrolling) {
        return;
      }

      xcontainer.scrollTop += 1;

      if (xcontainer.scrollTop >= xcontainer.scrollHeight - xcontainer.clientHeight) {
        xcontainer.scrollTop = 0;
      }

      requestAnimationFrame(scrollItems);
    }

    xcontainer.addEventListener('mouseenter', () => {
      requestAnimationFrame(scrollItems);
    });

    xcontainer.addEventListener('mouseleave', () => {
      isScrolling = false;
    });
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();

        if (email !== '') {
            const apiKey = '949ed296-1a29-47d2-9bb0-14499c651247';
            const listId = 'b3c1c780-0466-11ef-b337-69c4a66d3b77';
const apiUrl = `https://emailoctopus.com/lists/b3c1c780-0466-11ef-b337-69c4a66d3b77/members/embedded/1.0/add`;

            const data = {
                api_key: apiKey,
                email_address: email,
                status: 'subscribed'
            };

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(result => {
                console.log('Successfully subscribed:', result);
                // Optionally, you can display a success message to the user
                alert('Successfully subscribed to newsletter.');
            })
            .catch(error => {
                console.error('Error subscribing:', error.message);
                // Optionally, you can display an error message to the user
                alert('Error subscribing to newsletter. Please try again.');
            });
        } else {
            // Handle empty email input
            alert('Please enter your email address.');
        }
    });
});
