const {Router} = require('express')
const router = Router()

router.get('/',async (req, res) => {
    res.render('admin/index', {
        title: 'Admin panel',
        layout:'admin'
    })
})

//menyular
const {Child,Category,Parent}= require('../../model/Menu')
router.get('/menus',async (req, res) => {
    const c = await Category.find()
    console.log(c)
    res.render('admin/menus', {
        title: 'Admin panel',
        layout:'admin',
        c
    })
})


router.post('/addMenu',async (req, res) => {

    console.log(req.body)
   if (req.body.category){
       const c = new Category({
           name:req.body.category
       })
       await c.save()
   }
   if (req.body.child){
       const ch = new Child({
           name:req.body.child,
           category:req.body.category_id
       })

       await ch.save()
   }
    res.redirect('/admin/menus')
})


module.exports = router