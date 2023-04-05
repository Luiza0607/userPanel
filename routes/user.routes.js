const express = require('express');
const router = express.Router();

const loggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) {
		return res.redirect('user/no-permission');
	} else {
		next();
	}
};

router.get('/logged', loggedIn, (_req, res) => {
	res.render('logged', {
		user: _req.user.displayName,
		avatar: _req.user.photos[0].value
	});
});

router.get('/no-permission', (_req, res) => {
	res.render('noPermission');
});

router.get('/profile', loggedIn, (_req, res) => {
	res.render('profile');
});

router.get('/profile/settings', loggedIn, (_req, res) => {
	res.render('profileSettings');
});

router.get('/logout', (req, res) => {
	res.render("logout");
});

module.exports = router;