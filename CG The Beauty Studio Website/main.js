// F A Q Section JS
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  // 1. Accordion Toggle Functionality
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // Check if the clicked item is already active
      const wasActive = item.classList.contains('active');

      // Close all open FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          // Reset max-height on the answer element to ensure smooth collapse
          otherItem.querySelector('.faq-answer').style.maxHeight = '0';
        }
      });

      // If the item was not already active, open it
      if (!wasActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        // Set max-height to the scrollHeight to allow CSS transition to work
        // Use a defined height if scrollHeight is unreliable, but this is usually better.
        answer.style.maxHeight = answer.scrollHeight + 30 + "px";
        // Adding extra 30px to account for padding inside .active .faq-answer
      }
    });
  });
});

// WHY CHOOSE US SECTION