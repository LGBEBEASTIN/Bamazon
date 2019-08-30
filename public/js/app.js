let cart = [];

let showItems = function(products) {
  products.forEach(function(product) {
    let newProduct = $(` <tr>
          <td class="id">${product.id}</td>
          <td class="product_name">${product.product_name}</td>
          <td class="department_name">${product.department_name}</td>
          <td class="price">${product.price}</td>
          <td class="stock_quantity">${product.stock_quantity}</td>
          <td class="quantity"><input class="buy1" id="input"></td>
          <td><button type="button" class="btn btn-info">Add to Cart</button><td>
        </tr>`);
    $(".tbodypage").append(newProduct);
  });
};

let clearInput = function() {
  $("[id = input]").val("");
};

let validate = function(product) {
  if (product.incart.padStart(4,0) > product.instock.padStart(4,0)) {
    $(".alert").removeClass("hide");
    clearInput();
  } else if (isNaN(product.incart)){
    $(".alert").removeClass("hide");
    clearInput();
  }
  else {
    cart.push(product);
    clearInput();
  }
};


$(document).ready( function () {
  $.ajax({
    url: "/api/products",
    type: "GET"
  })
  .then(function(dbPost) {
    showItems(dbPost);
  });
 
  $(".table-body").on("click", ".btn", function() {
    $(".alert").addClass("hide");
    let product = {
      id: $(this)
        .parents("tr")
        .find(".id")
        .text(),
      name: $(this)
        .parents("tr")
        .find(".product_name")
        .text(),
      department: $(this)
        .parents("tr")
        .find(".department_name")
        .text(),
      price: $(this)
        .parents("tr")
        .find(".price")
        .text(),
      instock: $(this)
        .parents("tr")
        .find(".stock_quantity")
        .text(),
      incart: $(this)
        .parents("tr")
        .find(".buy1")
        .val()
    };

    validate(product);
   
  });

});

/* The code I have left would be to fill the cart up and compute the total of the progucts in the cart*/