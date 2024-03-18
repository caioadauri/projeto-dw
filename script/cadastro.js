const url = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user'
async function cadastroUsuario() {

  var name = document.getElementById('name')
  var email = document.getElementById('email')
  var password = document.getElementById('password')
  var cpf_cnpj = document.getElementById('cpf_cnpj')
  var birthday = document.getElementById('birthday')

  let response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify (
        {
        'name': name.value,
        'email': email.value,
        'user_type_id': 1,
        'password': password.value,
        'cpf_cnpj': cpf_cnpj.value,
        'terms': 1,
        'birthday': birthday.value
        }
    ),
    headers: {'Content-Type': 'application/json'}
  })

  let data = await response.json()
  if (data.data.statusCode != 200) {
    console.log(data.data.errors)
    return
  }
  console.log('Cadastro realizado com sucesso')
}



