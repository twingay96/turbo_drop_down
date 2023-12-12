import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["dropdownContent","openButton","closeButton"]
  connect(){
    this.dropdownContentTarget.hidden = true
    // <div data-dropdown-target="dropdownContent">을 숨김
    this.closeButtonTarget.hidden = true
  }
  openDropdown(){
    this.openButtonTarget.hidden= true
    this.dropdownContentTarget.hidden = false
    this.closeButtonTarget.hidden = false
    
    
  }
  closeDropdown(){
    this.dropdownContentTarget.hidden = true
    this.openButtonTarget.hidden = false
    this.closeButtonTarget.hidden= true

  }

  
  // connect()는 stimulus 내장함수
}
