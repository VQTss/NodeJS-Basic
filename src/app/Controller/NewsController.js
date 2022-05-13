class NewsController {

    news(req,res){
        res.render('news');
    }
    
    show(req,res){
        res.send('Details news')
    }
}

module.exports = new NewsController;
