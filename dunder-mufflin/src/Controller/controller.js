const { Product, productCount, productKeys } = require("./controller");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.btzpb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const productCollection = client.db('emaJohn').collection('product');

        app.get('/product',Product );

        app.get('/productCount',productCount);

        // use post to get products by ids
        app.post('/productByKeys',productKeys )

    }
    finally{}
}
run().catch(console.dir);

app.get('/', (req, res) =>{
    res.send('John is running and waiting for Ema')
});

app.listen(port, () =>{
    console.log('John is running on  port', port);
})