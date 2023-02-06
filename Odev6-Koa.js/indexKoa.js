const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if(ctx.path === '/') {
        ctx.body = '<h1>INDEX SAYFASINA HOS GELDINIZ</h1>'
    }
    else if (ctx.path === '/hakkimda') {
        ctx.body = '<h1>HAKKIMDA SAYFASINA HOS GELDINIZ</h1>'
    }
    else if (ctx.path === '/iletisim') {
        ctx.body = '<h1>ILETISIM SAYFASINA HOS GELDINIZ</h1>'
    }
    console.log(ctx.path);
})

const port = 3000;

app.listen(port, () => {
    console.log(`server ${port} portunda baslatildi`)
});