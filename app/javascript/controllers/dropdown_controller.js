import { Controller } from "@hotwired/stimulus"
// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["dropdownContent"]
  static values = {open: Boolean}
  // open: Boolean은 open이라는 이름의 값을 정의하고, 이 값이 불리언(Boolean) 타입이 될 것임을 나타냅니다. 
  connect(){
    // 처음방문 시에는 열린상태로
    // this.dropdownContentTarget.classList.add('hidden');
    // if(this.openValue){
    //   this.openDropdown()
    // } else{
    //   this.closeDropdown()
    // }
  }
  mouseOver() {
    this.dropdownContentTarget.classList.remove('hidden');
  }
  mouseOut() {
    this.dropdownContentTarget.classList.add('hidden');
  }
  // toggleDropdown(){
  //   if(this.dropdownContentTarget.hidden == true){
  //     this.openDropdown()
  //   } else {
  //     this.closeDropdown()
  //   }
  // }
  // openDropdown(){
  //   this.dropdownContentTarget.hidden = false
  // }
  // closeDropdown(){
  //   this.dropdownContentTarget.hidden = true

  // }
}
