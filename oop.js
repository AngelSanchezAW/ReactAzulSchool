class Phone {

  constructor(number, color, networkProvider, company) {
    console.log("Cada que se instancie un objeto, entra al constructor")
    this.number = number
    this.color = color,
    this.networkProvider = networkProvider,
    this.company = company
  }

  // Getters
  getNumber() {
    return this.number
  }

  getColor() {
    return this.color
  }

  getNetworkProvider() {
    return this.networkProvider
  }

  getCompany() {
    return this.company
  }

  // Setters

  setNumber(number) {
    this.number = number
  }

  setColor(color) {
    this.color = color
  }

  setNetworkProvider(networkProvider) {
    this.networkProvider = networkProvider
  }

  setCompany(company) {
    this.company = company
  }


  getInfo() {
    console.log("Información de este celular")
    console.log(`Número telefónico: ${this.getNumber()}`)
    console.log(`Color: ${this.getColor()}`)
    console.log(`Proveedor de red: ${this.getNetworkProvider()}`)
    console.log(`Compañia: ${this.getCompany()}`)
  }

  makeCall() {
    console.log(`Llamando al número ${this.getNumber()}`)
  }
}

// Instance of the class
const phone = new Phone(5555443322, "Rojo", "Telcel", "Xiaomi")
console.log(phone.getInfo())
phone.setNumber(1234123412)
console.log(phone.getInfo())

// New instance of the class
console.log("============ Otro celulaar ============")
const phone2 = new Phone(9999999999, "Azul", "AT&T", "Huawei")
console.log(phone2.getInfo())
phone.setNetworkProvider('Liberado')
console.log(phone.getInfo())