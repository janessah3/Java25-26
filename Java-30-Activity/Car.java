  class Car{ 
    // variables
    String brand;
    String model;
    String color;
    int year;
    double value;
  }
  //constructor
Car(String brand, String model, String color, int year, double value){
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.year = year;
  this.value = value;
}
  // make car honk (invoke function)
void honk(){
  System.out.println("beep");