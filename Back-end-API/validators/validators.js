exports.userSignupValidator = (req, res, next) => {

    req.check("fname", "First name is required").notEmpty();

    req.check("employeeid", "Employee ID is required").notEmpty()

    req.check("password", "Password is required").notEmpty();
    req.check("password")
    .isLength({min: 8})
    .withMessage("Password must contain 8 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number")

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next();
}

exports.userSigninValidator = (req, res, next) => {

    req.check("employeeid", "Employee ID is required").notEmpty()

    req.check("password", "Password is required").notEmpty();
    req.check("password")
    .isLength({min: 8})
    .withMessage("Password must contain 8 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number")

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next();
}

exports.requestValidator = (req, res, next) => {

    req.check("reasons", "Reason is required").notEmpty();

    req.check("money", "Money is required").notEmpty()

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next();
}