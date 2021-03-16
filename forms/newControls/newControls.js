
HMBRleft.onclick=function(s1){
  if(typeof(s) == "object") {
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
  if(typeof(s) == "object") {
    return
  } else {
      switch(s2) {
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
