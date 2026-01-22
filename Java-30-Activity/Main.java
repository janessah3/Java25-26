class Main {

  public static void main(String[] args) {
    (new Main()).init();
  }
  
  void print(Object o){System.out.println(o);}
  void printt(Object o){System.out.print(o);}

  void init(){
    // create objects
   Car Porche = new Car()
   Car Toyota = new Car("Toyota","Camry","Grey",2021,24500)

    // display brand, model and value of each car
    System.out.println(Porche.brand)
    System.out.println(Porche.model)
    System.out.println(Porche.value)
    System.out.println("\n")
    System.out.println(Toyota.brand)
    System.out.println(Toyota.model)
    System.out.println(Toyota.value)

    // Display brand and model of any car with value over 30,000
    print("\nCars with value exceeding $30,000:");
	if(Porche.value > 3000){
    System.out.println(Porche.brand);
    System.out.println(Porche.model);
  }
	// Make BMW honk
	print("\nUsing car functions(behavior):");	
  BMW.honk();
    
  }

}