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
    print(Porche.brand)
    print(Porche.model)
    print(Porche.value)
    print("\n")
    print(Toyota.brand)
    print(Toyota.model)
    print(Toyota.value)

    // Display brand and model of any car with value over 30,000
    print("\nCars with value exceeding $30,000:");
	
	// Make BMW honk
	print("\nUsing car functions(behavior):");	
  Porche.honk();
    
  }

}