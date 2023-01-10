const { createPath } = require('../helpers/createPath');

class PostControllers {
_handleError(error) {
    console.log(error);
    res.status(404);
}

    getHome(req,res) {
        try {
            res.render(createPath('index'), { title: 'Home' });
        } catch(error) {
            this._handleError(error);
        }
    }
}

module.exports = new PostControllers;