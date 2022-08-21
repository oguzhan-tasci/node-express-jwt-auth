// controller actions
module.exports.signup_get = (req, res) => {
  res.render('signup');
}

module.exports.login_get = (req, res) => {
  res.render('login');
}

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send('new signup');
}

module.exports.login_post = async (req, res) => {
  // console.log(req.body) --> Postmandan post işlemi yaptığımızda çıktısı böyle oluyor : {email : 'mario@google.com' , password : 'test12'}
  const { email, password } = req.body;
  console.log(email, password);
  
  res.send('user login');
}