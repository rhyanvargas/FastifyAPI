async function routes (fastify, options) {

    // GET /users/:id
    fastify.get('/:id', async (req,res) => {
        res.send ({
            id: req.params.id,
            firstname: "Rhyan",
            lastname: "Doe"
        })
    });
};

module.exports = routes;
