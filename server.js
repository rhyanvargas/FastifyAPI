const fastify = require('fastify')({logger: true});
const path = require('path');

// Plugins
fastify.register(require('fastify-static'), {
    // todo: prefix the public asset files with  '/pubilc/{filename}'
    root: path.join(__dirname, 'public'),
    prefix: '/public/', // optional: default '/'
});

// Declare routes
fastify.get('/', async(req, reply)=> {
    reply.sendFile('index.html')
});

fastify.register(require('./routes/users.js'), {prefix:'/users'});
fastify.register(require('./routes/transactions.js'), {prefix:'/transactions'});

// listener (server)
const start =  async ()=> {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening to on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start();