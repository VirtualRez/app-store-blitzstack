import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
//service
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  //property
  items;
  checkoutForm;

  //PROVA
  prova(){

    console.log("questa e una prova")
  }

  //Method
  clearCart() {
    this.items = this.cartService.clearCart();
  }
  onSubmit(customerData) {
    //process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: "",
      adress: ""
    });
  }

  ngOnInit() {}
}
