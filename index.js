let food = [];
let totalAmount = 0;

$(document).ready(function() {

  if ($(document).width() <= 992) {
    $('.navbar-nav').removeClass("ml-auto");
    $('.navbar-nav').addClass("mr-auto");
  } else {
    $('.navbar-nav').removeClass("mr-auto");
    $('.navbar-nav').addClass("ml-auto");
  }

  var scrollToTopBtn = $('#scrollToTop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      scrollToTopBtn.addClass('show');
    } else {
      scrollToTopBtn.removeClass('show');
    }
  });

  scrollToTopBtn.on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '500');
  });

  $(".navbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // console.log(this);
      // console.log(this.hash);
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if
  });

  $('.homeBtn').click(function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  $('.product-box-layout4').click(function() {
    $(this).toggleClass("productClicked").parent().siblings('div').children().removeClass("productClicked");
    if ($(this)[0].className.search('momos productClicked') > -1) {
      $('#momos').show().siblings('div').hide();

      $('html, body').animate({
        scrollTop: $('#momos').offset().top
      }, 800, function() {});

    } else if ($(this)[0].className.search('chinese productClicked') > -1) {
      $('#chinese').show().siblings('div').hide();

      $('html, body').animate({
        scrollTop: $('#chinese').offset().top
      }, 800, function() {});

    } else if ($(this)[0].className.search('beverages productClicked') > -1) {
      $('#beverages').show().siblings('div').hide();

      $('html, body').animate({
        scrollTop: $('#beverages').offset().top
      }, 800, function() {});
    }
    else if ($(this)[0].className.search('weeks productClicked') > -1) {
      $('#weeks').show().siblings('div').hide();

      $('html, body').animate({
        scrollTop: $('#weeks').offset().top
      }, 800, function() {});
    }
    
  });


  $(".menuBtn").click(function() {
    let quantity = $(this).siblings(".quantity");
    let foodNameClicked = quantity.parent().siblings('div').children().first().text().trim();
    let singleFoodAmount = Number(quantity.parent().siblings('div').children().last().text());

    let count = Number(quantity.text());
    if ($(this)[0].className.search('plus') > -1) {
      count = count + 1;
      quantity.text(count);
      ToCart(foodNameClicked, count, singleFoodAmount);

    } else if ($(this)[0].className.search('minus') > -1) {
      if (count <= 0) {
        quantity.text(0);
      } else {
        count = count - 1;
        quantity.text(count);
        totalAmount = totalAmount - singleFoodAmount - singleFoodAmount;
        ToCart(foodNameClicked, count, singleFoodAmount);
      }
    }
  });

  function ToCart(foodNameClicked, foodQuantity, singleFoodAmount) {
    let foodAlreadyThere = false;
    let foodPos;

    for (var i = 0; i < food.length; i++) {
      if (food[i][0] === foodNameClicked) {
        foodAlreadyThere = true;
        foodPos = i;
        break;
      } else {
        foodAlreadyThere = false;
      }
    }

    if (foodAlreadyThere) {

      food.splice(foodPos, 1);
      food.push([foodNameClicked, foodQuantity, singleFoodAmount]);
    } else {
      food.push([foodNameClicked, foodQuantity, singleFoodAmount]);
    }

    // Remove Food items with quantity = 0
    for (var i = 0; i < food.length; i++) {
      if (food[i][1] === 0) {
        food.splice(i, 1);
      }
    }

    if (food.length !== 0) {
      $('.shoppingCart').addClass('shoppingCartWithItems');

      $('.cartContentDiv').empty();
      for (var i = 0; i < food.length; i++) {
        let cartTxt = '<div class="row cartContentRow"><div class="col-10"> <p>' + food[i][0] + ' </p> <p class="text-muted-small"><img src ="images/dollar.png">' + food[i][2] + '</p>  </div>  <div class="col-2">  <span class="cartQuantity">' + food[i][1] + '</span> <p class="text-muted-small"><img src ="images/dollar.png">' + food[i][1] * food[i][2] + '</p>   </div>  </div> <hr class="cartHr">';
        $('.cartContentDiv').append(cartTxt);
      }

    } else {
      $('.shoppingCart').removeClass('shoppingCartWithItems');

      $('.cartContentDiv').empty();
      $('.cartContentDiv').append('<h1 class="text-muted">Your Cart is Empty</h1>');
    }

    $('.shoppingCartAfter').text(food.length);

    if (food.length === 0) {
      totalAmount = 0;
    } else {
      totalAmount = totalAmount + singleFoodAmount;
    } 

    

    $('.totalAmountDiv').empty();
    $('.totalAmountDiv').append('Total Amount: ' + totalAmount, '');

  }


});

function openWhatsapp() {

  // console.log($('#address'));

    let total = 0;
    let yesno = $('#yesno')[0].value;
    let address = $('#address')[0].value;
    let note = $('#note')[0].value;
    let wTxt = '                \n';

    for (var i = 0; i < food.length; i++) {
      let name = food[i][0];
      let quantity = food[i][1];
      total = total + food[i][1] * food[i][2];
      wTxt = wTxt + name + '      ' + quantity + '  \n';
    }
    if($('#yesno')[0].value === "Yes" || $('#yesno')[0].value === "YES" ||$('#yesno')[0].value === "yEs" ||$('#yesno')[0].value === "YEs" ||$('#yesno')[0].value === "yeS" ||$('#yesno')[0].value === "YeS" ||$('#yesno')[0].value === "yeS" ||$('#yesno')[0].value === "yes"||$('#yesno')[0].value === "Yeah"||$('#yesno')[0].value === "YEAH"||$('#yesno')[0].value === "ДА"||$('#yesno')[0].value === "Да"||$('#yesno')[0].value === "дА") {
      total = 10 + total;
    }
    if ($('#note')[0].value === "") {
      wTxt = wTxt + '\n *Total Bill: ' + total + '*' + '\n\n Address: ' + address + '\n\n Will it be delivery?: ' + yesno;
    } else { 
      wTxt = wTxt + '\n *Total Bill: ' + total + '*' + '\n\n Address: ' + address + '\n Note: ' + note + '\n\n Will it be delivery?: ' + yesno ;
    }

    let wTxtEncoded = encodeURI(wTxt);
    window.open("https://www.messenger.com/t/102901722189695?text=" + wTxtEncoded);
  }


// Did not work out code
// let totalAmount = 0;
// let foodNameClickedArray = [];
// let singleFoodAmountArray = [];
// let foodQuantityArray = [];
//
// function addToCart(foodNameClicked, foodQuantity, singleFoodAmount) {
//
//   if (foodNameClickedArray.indexOf(foodNameClicked) > -1) {
//
//     foodNameClickedArray.splice(foodNameClickedArray.indexOf(foodNameClicked), 1);
//     foodNameClickedArray.push(foodNameClicked.trim());
//
//     if (singleFoodAmountArray.indexOf(singleFoodAmount) > -1) {
//       singleFoodAmountArray.splice(singleFoodAmountArray.indexOf(singleFoodAmount), 1);
//       singleFoodAmountArray.push(singleFoodAmount);
//     }
//
//     if (foodQuantityArray.indexOf(foodQuantity - 1) > -1) {
//       foodQuantityArray.splice(foodQuantityArray.indexOf(foodQuantity - 1), 1);
//       foodQuantityArray.push(foodQuantity);
//     }
//
//   } else {
//     foodNameClickedArray.push(foodNameClicked.trim());
//     singleFoodAmountArray.push(singleFoodAmount);
//     foodQuantityArray.push(foodQuantity);
//   }
//
//   totalAmount = totalAmount + singleFoodAmount;
//
//   console.log(foodNameClickedArray);
//   console.log(foodQuantityArray);
//   console.log(singleFoodAmountArray);
//   console.log('Total Bill: ', totalAmount);
// }


// function removeFromCart(foodNameClicked, foodQuantity, singleFoodAmount) {
//   if (foodQuantity > 0) {
//     if (foodQuantityArray.indexOf(foodQuantity + 1) > -1) {
//       console.log(foodQuantityArray.indexOf(foodQuantity + 1));
//
//       foodQuantityArray.splice(foodQuantityArray.indexOf(foodQuantity + 1), 1);
//       foodNameClickedArray.splice(foodQuantityArray.indexOf(foodQuantity + 1), 1);
//       singleFoodAmountArray.splice(foodQuantityArray.indexOf(foodQuantity + 1), 1);
//
//       foodQuantityArray.push(foodQuantity);
//       foodNameClickedArray.push(foodNameClicked);
//       singleFoodAmountArray.push(singleFoodAmount);
//     }
//
//   }
//
//   totalAmount = totalAmount - singleFoodAmount;
//
//
//   console.log(foodNameClickedArray);
//   console.log(foodQuantityArray);
//   console.log(singleFoodAmountArray);
//   console.log('Total Bill: ', totalAmount);
// }
