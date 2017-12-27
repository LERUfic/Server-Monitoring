module.exports = {
  checkAuth: function(req,res,next){
    console.log('masuk');
    if(!req.session.user_id){
      res.redirect('/');
      console.log('sudah login');
    }
    else{
      res.header('Cache-Control','no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        next();
    }
  }
};
