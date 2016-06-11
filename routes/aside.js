var express = require('express');
var router = express.Router();

/* GET aside page. */
// 1 nodejs
router.get('/async_io', function(req, res, next) {
  res.render('1async_io');
});
router.get('/async_program', function(req, res, next) {
  res.render('1async_program');
});
router.get('/buffer', function(req, res, next) {
  res.render('1buffer');
});
router.get('/memory_control', function(req, res, next) {
  res.render('1memory_control');
});
router.get('/net_program', function(req, res, next) {
  res.render('1net_program');
});

// 2 javascript
router.get('/browser_compat', function(req, res, next) {
  res.render('2browser_compat');
});
router.get('/ajax', function(req, res, next) {
  res.render('2ajax');
});
router.get('/optimize', function(req, res, next) {
  res.render('2optimize');
});
router.get('/inherit', function(req, res, next) {
  res.render('2inherit');
});
router.get('/closure', function(req, res, next) {
  res.render('2closure');
});
router.get('/scope', function(req, res, next) {
  res.render('2scope');
});
router.get('/ajax', function(req, res, next) {
  res.render('2ajax');
});
router.get('/json', function(req, res, next) {
  res.render('2json');
});
router.get('/modularity', function(req, res, next) {
  res.render('2modularity');
});

// 3 css
router.get('/animate', function(req, res, next) {
  res.render('3animate');
});
router.get('/cssdraw', function(req, res, next) {
  res.render('3cssdraw');
});
router.get('/css3_compat', function(req, res, next) {
  res.render('3css3_compat');
});

// 4 web其他
router.get('/guide_http', function(req, res, next) {
  res.render('4guide_http');
});
router.get('/web_safe', function(req, res, next) {
  res.render('4web_safe');
});
router.get('/seo', function(req, res, next) {
  res.render('4seo');
});

// 5 摄影精选
router.get('/select_equip', function(req, res, next) {
  res.render('5select_equip');
});
router.get('/shoot_primer', function(req, res, next) {
  res.render('5shoot_primer');
});
router.get('/shoot_advance', function(req, res, next) {
  res.render('5shoot_advance');
});
router.get('/better_pic', function(req, res, next) {
  res.render('5better_pic');
});

// 6 热门电子
router.get('/phone', function(req, res, next) {
  res.render('6phone');
});
router.get('/computer', function(req, res, next) {
  res.render('6computer');
});

// 7 Talk-NBA
router.get('/cleveland', function(req, res, next) {
  res.render('7cleveland');
});
router.get('/golden_state', function(req, res, next) {
  res.render('7golden_state');
});
router.get('/final_storys', function(req, res, next) {
  res.render('7final_storys');
});

module.exports = router;
