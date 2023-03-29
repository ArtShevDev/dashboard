const User = require('../models/User');
const { createPath } = require('../helpers/createPath');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

class PostControllers {
  /** временное решение фиксации ошибок */
_handleError(error) {
  console.log(error);
  res.status(404);
}
async registration(req,res) {
  try {

    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ message: `Ошибка регистрации.`, errors });

    const { username, password, rPassword, email, phone } = req.body;

    const condidate = await User.findOne({username});
    if(condidate) return res.status(400).json({message: `пользователь с таким именем уже зарегистрирован.`});

    if(password != rPassword) return res.status(400).json({ message: "пароли не совпадают." });
    const hashPasswd = await bcrypt.hash(password, 5);

    
    

  } catch(error) {
    this._handleError(error);
  }
}
  async getHome(req,res) {
      try {
        const taskHeaderTitle = 'Homepage Design';
        User
          .find()
          .sort({ createdAt: -1 })
          .then(users => res.render(createPath('index'), { title: 'Home', taskHeaderTitle, users }));
      } catch(error) {
          this._handleError(error);
      }
  }
  async addUser(req,res) {
    try {
      const { nikname,firstname,lastname,birthday,sex,tel,email,country,avatar,city } = req.body;
      // await User({
      //   nikname,
      //   firstname,
      //   lastname,
      //   birthday,
      //   sex,
      //   tel,
      //   email,
      //   location: {
      //     country: country,
      //     city: city
      //   }
      // }).save().then(() => res.redirect('/'));
      console.log(avatar.split(' ').join('_'));
    } catch(error) {
      console.log(error);
    }
  }
}

module.exports = new PostControllers;