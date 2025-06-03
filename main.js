 // Show button after scrolling down 300px
  window.onscroll = function () {
    const scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

// Testimonial
$(document).ready(function () {
    $('.testimonial-head').hover(function () {
        $('.testimonial-head').fadeToggle(1000);
    });

});


// about us starts
// COUNTER FUNCTION
var counter = function () {
    $('#section-counter').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('counter-animated')) {
            
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

            $('.number').each(function () {
                var $this = $(this);
                var num = $this.data('number');

                $this.animateNumber({
                    number: num,
                    numberStep: comma_separator_number_step
                }, 3000); // 3 seconds animation
            });

            $(this.element).addClass('counter-animated'); // To prevent multiple triggers
        }
    }, {
        offset: '80%' // Trigger when 80% of the section is visible
    });
};

// Call the counter function
$(document).ready(function () {
    counter();
});
// about us ends

// Order Cake Page

$(document).ready(function() {
  // Initialize date picker
    $("#book_date").datepicker({
        format: "mm/dd/yyyy",
        autoclose: true,
        todayHighlight: true
    });

    // Initialize time picker
    $("#book_time").timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: '8',
        maxTime: '10:00pm',
        defaultTime: '1:00 PM',
        startTime: '08:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
});

// Order form
document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('cakeOrderForm');
    const orderConfirmation = document.getElementById('orderConfirmation');
    const orderSummary = document.getElementById('orderSummary');

    orderForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form field values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const deliveryDate = document.getElementById('deliveryDate').value;
        const deliveryTime = document.getElementById('deliveryTime').value;
        const cakeFlavor = document.getElementById('cakeFlavor').value;
        const cakeSize = document.getElementById('cakeSize').value;

        // Validation Patterns
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const phoneRegex = /^\d{11}$/;

        // Name validation
        if (!nameRegex.test(name)) {
            alert("Please enter a valid name (only letters and spaces allowed).");
            return;
        }

        // Email validation
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email (must contain @ and domain like .com).");
            return;
        }

        // Phone number validation
        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid phone number (digits only, 11 digits).");
            return;
        }

        // Address validation
        if (address === '') {
            alert("Please enter your delivery address.");
            return;
        }

        // Date, time, flavor, and size validation (basic check)
        if (!deliveryDate || !deliveryTime || !cakeFlavor || !cakeSize) {
            alert("Please fill all fields including delivery date, time, cake flavor and size.");
            return;
        }

        // ✅ All validations passed
        const summaryHTML = `
            <div class="summary-details">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Delivery Address:</strong> ${address}</p>
                <p><strong>Delivery Date:</strong> ${deliveryDate} at ${deliveryTime}</p>
                <p><strong>Cake:</strong> ${cakeSize} kg ${cakeFlavor}</p>
            </div>
        `;

        orderSummary.innerHTML = summaryHTML;
        orderForm.style.display = 'none';
        orderConfirmation.style.display = 'block';
        orderConfirmation.scrollIntoView({ behavior: 'smooth' });

        console.log('Order submitted:', {
            name, email, phone, address, deliveryDate, deliveryTime, cakeFlavor, cakeSize
        });
    });
});




// Contact form
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault(); // Stop real submission

        // Get form values
        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const phone = this.querySelector('input[type="tel"]').value.trim();

        // Regex patterns
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const phoneRegex = /^\d{11}$/;

        // Name Validation
        if (!nameRegex.test(name)) {
            alert("Please enter a valid name (only letters and spaces allowed).");
            return;
        }

        // Email Validation
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone Validation (only if filled)
        if (phone && !phoneRegex.test(phone)) {
            alert("Phone number should contain only digits (11 digits).");
            return;
        }

        // ✅ All good — continue with reset and modal
        this.reset();

        const myModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        myModal.show();
    });
});

