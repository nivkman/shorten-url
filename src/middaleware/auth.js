const auth = (req, res, next) => {
    try {
        const token = process.env.TOKEN;
        
        if (req.headers.w_auth === token) {
            return next();
        }
        else
            res.json({status: "Unauthorized"});
    }
    catch {
        res.json({status: "Unauthorized"});
    }
}

module.exports = { auth };