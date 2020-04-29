const express = require('express')
const app = express()

//解决跨域问题
app.use(require('cors')())
//识别json数据
app.use(express.json())
//定义数据库
const mongoose = require('mongoose')
//创建数据库连接
mongoose.connect('mongodb://localhost:27017/element-admin',{
        useNewUrlParser:true,
        useFindAndModify:true,
        useCreateIndex:true
    })


//定义数据操作模型
const Article = mongoose.model('Article',new mongoose.Schema({
    title:{type:String},
    content:{type:String},
}))

//展示数据
app.get('/',async(req,res)=>{
    res.send('index')
})
//新增文章
app.post('/api/articles',async (req,res)=>{
    const article = await Article.create(req.body)
    res.send(article)
})
//文章列表
app.get('/api/articles',async (req,res)=>{
    const article = await Article.find()
    res.send(article)
})
//删除文章 --->:id --->动态id
app.delete('/api/articles/:id',async(req,res)=>{
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status:true
    })
})
//文章详情
app.get('/api/articles/:id',async (req,res)=>{
    const article = await Article.findById(req.params.id)
    res.send(article)
})
//修改文章
app.put('/api/articles/:id',async (req,res)=>{
    const article = await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send(article)
})
app.get('/api/articles',async (req,res)=>{
    const article = await Article.find()
    res.send(article)
})

app.listen(3001,()=>{
    console.log('http://localhost:3001/')
})