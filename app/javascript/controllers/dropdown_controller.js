import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["dropdownContent","openButton","closeButton","active"]
  static values = {open: Boolean}
  // open: Boolean은 open이라는 이름의 값을 정의하고, 이 값이 불리언(Boolean) 타입이 될 것임을 나타냅니다. 

  connect(){
    // 처음방문 시에는 열린상태로 
    if(this.openValue){
      this.openDropdown()
    } else{
      this.closeDropdown()
    }
    
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
    try{
      this.activeTarget.classList.add("bg-zinc-400")
    } catch{}
  }
  closeDropdown(){
    this.dropdownContentTarget.hidden = true
    try{
      this.openButtonTarget.hidden = false
      this.closeButtonTarget.hidden= true
    } catch{}
    try {
      this.activeTarget.classList.remove("bg-zinc-400")
    } catch{}

  }

  
  // connect()는 stimulus 내장함수
}
