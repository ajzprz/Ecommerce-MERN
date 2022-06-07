const welcomeUser = (req, res) => {
    console.log(req.body)
    res.send(`Welcome ${req.body.name}`)
}

module.exports = welcomeUser;