
$(document).ready(function() {
    $(document).ready(function(){
        // Function to get query parameters from URL
        function getQueryParams() {
          const params = new URLSearchParams(window.location.search);
          return {
            price: params.get('price'),
            name: params.get('name'),
            image: params.get('image')
          };
        }
      
        // Function to update total price
        function updateTotalPrice() {
          let quantity = parseInt($('.counter .val').text());
          let price = parseInt($('#product-price').data('price'));
          let totalPrice = price * quantity;
          $('.total').text(`Total: ₹${totalPrice}/-`);
        }
      
        // Function to update cart number
        function updateCartNumber(change) {
          let currentNumber = parseInt($('.cart .number').text());
          let newNumber = currentNumber + change;
          $('.cart .number').text(newNumber);
        }
      
        // Common functionality for product pages
        function setupProductPage() {
          const { price, name, image } = getQueryParams();
      
          if (price && name && image) {
            $('#product-image').attr('src', image);
            $('#product-name').text(name);
            $('#product-price').text(`₹${price}/-`).data('price', price);
            updateTotalPrice();
            updateCartNumber(0);
          }
      
          // Event listener for plus and minus buttons
          $('.counter .minus, .counter .plus').on('click', function() {
            let valElement = $(this).siblings('.val');
            let val = parseInt(valElement.text());
      
            if ($(this).hasClass('plus')) {
              val++;
            } else {
              if (val > 1) val--;
            }
      
            valElement.text(val);
            updateTotalPrice();
          });
      
          // Event listener for adding to cart
          $('#add').on('click', function(event) {
            event.preventDefault();
            updateCartNumber(1);
          });
        }
      
        // Call setupProductPage() when the document is ready
        setupProductPage();
      });
      


});

