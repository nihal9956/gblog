import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
export const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.access_token
        if (!token) {
            return next(403, 'Unathorized')
        }
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
         const currentUser = await User.findById({_id:decodeToken._id});
        req.user = currentUser
        next()
    } catch (error) {
        next(500, error.message)
    }
}