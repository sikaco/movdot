/*
 * GET home page.
 */

exports.home = function(req, res) {
    res.render('template', {
        partials: {
            content: "home"
        }
    });
};

exports.archive = function(req, res) {
    res.render('template', {
        partials: {
            content: "archive"
        }
    });
};

exports.comments = function(req, res) {
    res.render('template', {
        partials: {
            content: "comments"
        }
    });
};

exports.about = function(req, res) {
    res.render('template', {
        partials: {
            content: "about"
        }
    });
};

exports.login = function(req, res) {
    res.render('template', {
        partials: {
            content: "login"
        }
    });
};

