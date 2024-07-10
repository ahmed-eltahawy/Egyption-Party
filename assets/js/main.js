$(document).ready(function () {
  // Handle Navbar Toggle and Active Class
  $(".close-nav").click(function () {
      $("#mainNav").removeClass("show");
  });

  $(".navbar-nav .nav-link").click(function () {
      $(".navbar-nav .nav-link").removeClass("active");
      $(this).addClass("active");
  });

});


// Countdown Timer Function
function countDownToTime(countTo) {
  const futureDate = new Date(countTo).getTime() / 1000; // Convert to seconds
  let countdownInterval; // Declare interval variable

  function updateCountdown() {
      const now = new Date().getTime() / 1000; // Convert to seconds
      let timeDifference = futureDate - now;

      const days = Math.floor(timeDifference / (24 * 60 * 60));
      const hours = Math.floor((timeDifference % (24 * 60 * 60)) / 3600);
      const minutes = Math.floor((timeDifference % 3600) / 60);
      const seconds = Math.floor(timeDifference % 60);

      // Update HTML elements directly
      $('.days').text(`${days} D`);
      $('.hours').text(`${hours} h`);
      $('.minutes').text(`${minutes} m`);
      $('.seconds').text(`${seconds} s`);

      if (timeDifference < 0) {
          clearInterval(countdownInterval);
          $(".countdown").html("Countdown Expired!");
      }
  }

  // Call updateCountdown initially to display the countdown right away
  updateCountdown();

  // Set the interval to update every second
  countdownInterval = setInterval(updateCountdown, 1000);
}

// Start the countdown when the page is fully loaded
countDownToTime("26 July 2030 02:00:00");



$(document).ready(function() {
  // Character Counter for Message Textarea
  const messageTextarea = $('textarea[placeholder="Enter Message"]');
  const charCount = $('.char-count');
  const maxChars = 100;

  messageTextarea.on('input', function() {
      const remainingChars = maxChars - $(this).val().length;
      charCount.text(remainingChars + ' Characters Remaining');
  });
});