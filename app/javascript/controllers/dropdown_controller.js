import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["dropdownContent","openButton","closeButton"]
  connect(){
    this.closeDropdown()
  }
  toggleDropdown(){
    if(this.dropdownContentTarget.hidden == true){
      this.openDropdown()
    } else {
      this.closeDropdown()
    }
    
  }
  openDropdown(){
    this.openButtonTarget.hidden= true
    try{
      this.dropdownContentTarget.hidden = false
      this.closeButtonTarget.hidden = false
    } catch{
      // try {} 내부 코드실행중 오류발생시 catch{} 내부코드 실행
    }

    
    
  }
  closeDropdown(){
    this.dropdownContentTarget.hidden = true
    try{
      this.openButtonTarget.hidden = false
      this.closeButtonTarget.hidden= true
    } catch{}
 

  }

  
  // connect()는 stimulus 내장함수
}
