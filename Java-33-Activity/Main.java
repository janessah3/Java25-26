class Main {

  public static void main(String[] args) {
    (new Main()).init();
  }
  
  void print(Object o){System.out.println(o);}
  void printt(Object o){System.out.print(o);}

  void init(){

	//3: create 3 new item objects
	CartItem Strawberry = new CartItem("Strawberry", 2.99, 20, false);
  CartItem Milk = new CartItem("Milk", 4.99, 1, true);
  CartItem Oranges = new CartItem("Oranges", 3.99, 3, false);
	
	//4: display name & original price of items that are on sale
	System.out.println(Milk.itemName);
  System.out.println(Milk.itemPrice);

	
	//5: subtotal (for all quantities of all items in cart, using discounted prices)
	double subtotal = Strawberry.getPrice()*Strawberry.quantity + Milk.getPrice()*Milk.quantity + Oranges .getPrice()*Oranges.quantity;
	
	// display subtotal, tax and total
  double tax = subtotal * 8.875/100;

  double total = subtotal + tax;
  }

}