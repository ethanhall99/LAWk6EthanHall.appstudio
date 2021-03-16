
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

/*
dogStore.onshow=function(){
    btnAddItem.style.color = "white"
    lblShowItems.textContent = items
}    

btnAddItem.onclick=function(){
  wishList.push(inptAdd.value)
  lblShowWishList.textContent = wishList
}
*/

membership.onshow=function(){
    BTNsubmit.style.color = "white"
}

BTNsubmit.onclick=function(){
    if (members.includes(INPTusername.value)) {
        LBLmemberYN.textContent = "You are a member."
  } else {
        members.push(INPTusername.value)
        LBLmemberYN.textContent = "You are not a member."
  }
}


