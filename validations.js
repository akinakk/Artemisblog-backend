import { body } from "express-validator";

export const loginValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 })
]

export const registerValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
    body('fullName', 'Please provide your full name').isLength({ min: 3 }),
    body('fullUrl', 'Invalid avatar URL').optional().isURL(),
]

export const postCreateValidation = [
    body('title', 'Please enter article title').isLength({ min: 3 }).isString(),
    body('text', 'Minimum article length is 10 characters').isLength({ min: 10 }).isString(),
    body('tags', 'Invalid tag format').optional().isString(),
    body('imageUrl', 'Invalid image URL').optional().isString(),
]
