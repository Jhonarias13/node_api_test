const httpError = (res, err) => {
    console.log(err);
    res.status(500);
    res.send({error: 'algo pasó :('});
};

module.exports = { httpError };