
async function routes (fastify, options) {
    
    fastify.get('/:id', async(req,res) =>{
        res.send ({
            id: req.params.id,
            counterpartyID: "321",
            amount: 4523.234
        });
    });

};

module.exports = routes