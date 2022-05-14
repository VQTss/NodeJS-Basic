

class SiteController {

    // [GET]  /home
    home(req, res) {

        res.render('home')
    }
    // [GET] /search
    search(req, res) {
        res.render('search')
    }
    update(req,res){
        var respomData = {
            "message" : "Cập nhật dữ liệu thành công",
            "data" : {
                "id" : 1,
                "name": "Võ Quốc Thái",
                "status":  true
            }
        }
        res.send(respomData);
    }
    student(req,res){
        res.send({result : req.params});
    }
    register(req,res){
        // console.table(req.body);
        res.send(req.body);
    }
}

module.exports = new SiteController;

