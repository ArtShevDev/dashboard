const User = require('../models/User');
const { createPath } = require('../helpers/createPath');

class PostControllers {
  /** временное решение фиксации ошибок */
_handleError(error) {
  console.log(error);
  res.status(404);
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
      const { nikname,firstname,lastname,birthday,sex,tel,email,country,city } = req.body;
      await User({
        nikname,
        firstname,
        lastname,
        birthday,
        sex,
        tel,
        email,
        location: {
          country: country,
          city: city
        }
      }).save().then(() => res.redirect('/'));
    } catch(error) {
      console.log(error);
    }
  }
}

module.exports = new PostControllers;