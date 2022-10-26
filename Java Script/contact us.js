function validate(){
    let form = document.forms["registerForm"]
    let name = document.getElementById('names')
    let email = document.getElementById('email')
    let city =  document.getElementById('city')
    let tos =   document.getElementById('tos')
    let mgender = document.getElementById('mgender')
    let fgender = document.getElementById('fgender')
    let errorMsg = [] 
    valname(names,errorMsg)
    valemail(email,errorMsg)
    valGender(mgender,fgender,errorMsg)
    valtos(tos,errorMsg)
    valcity (city,errorMsg)
    if(errorMsg.length === 0){
        alert('Registration Success!')
      }
      else{
        alert(errorMsg.join('\n'))
      }
}


if(location.search != ""){

    var search = location.search.slice(1) 
    if(search.slice(0,4) == "err="){
        var code = search.slice(4)
        if(code == 1){
            document.getElementById("err-msg").innerText
        }
    }
}
function valname(names,errorMsg){
    let str = names.value, cnt = 0, space = 0
    if(str === '') errorMsg.push('Username required')
    else{
      if(str.length < 5) errorMsg.push('Username minimal 5 characters')
      for(let i = 0; i < str.length; i++){
        if(str.charAt(i) >= '0' && str.charAt(i) <= '9') cnt++;
        if(str.charAt(i) == ' ') space++;
      }
      if(cnt === 0) errorMsg.push('Username doesnt contain numbers')
      if(space === 0) errorMsg.push('Username doesnt contain space')
    }
}
function valemail(email,errorMsg){
    let str = email.value
    if(str === '') errorMsg.push('Email required')
    else{
      if (str.startsWith('.') || str.startsWith('@')) 
        errorMsg.push('Email cannot start with . or @')
      if (str.indexOf('.') === (str.indexOf('@') + 1))
        errorMsg.push('Email cannot contain . after @')
      if (!(str.endsWith('@gmail.com')))
        errorMsg.push('Email must ends with @gmail.com')
    }
}

function valGender(mgender, fgender, errorMsg){
    if(!mgender.checked && !fgender.checked) errorMsg.push('Gender required')
}
function valtos(tos, errorMsg){
    if(!tos.checked) errorMsg.push('You must agree with terms and conditions')
}
function valcity(city, errorMsg){
    if(!city.value) errorMsg.push('City required')
}