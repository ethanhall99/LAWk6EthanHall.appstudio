
HMBRleft.onclick=function(s1){
  if(typeof(s1) == "object") {
    return
  } else {
      switch(s1) {
        case "Calculator":
            HMBRleft.hide()
            ChangeForm(calculator)
            break
        case "Membership":
            HMBRleft.hide()
            ChangeForm(membership)
            break
      }
  }  
}

DDmiddle.onclick=function(s2){
  if(typeof(s2) == "object") {
    return
  } else {
      switch(s2) {
        case "Calculator":
            ChangeForm(calculator)
            break
        case "Membership":
            ChangeForm(membership)
            break
      }
  }   
}

RDBswitch.onclick=function(){
      if (RDBswitch.value == 0)
        NSB.MsgBox("Use Dropdown to switch to pages")
      else 
        NSB.MsgBox("Use Dropdown to switch to pages")  
}


let form = 'Calculator'

SELECTform.onchange=function(){
      if (SELECTform.value == 1)
        form = 'Calculator'
      else if (SELECTform.value == 2)
        form = 'Membership'  
      else 
        form = 'newControls'
}


BTNgo.onclick=function(){
      switch(form) {
        case "Calculator":
            ChangeForm(calculator)
            break
        case "Membership":
            ChangeForm(membership)
            break
        case "newControls":
            ChangeForm(newControls)
            break            
      }
}
