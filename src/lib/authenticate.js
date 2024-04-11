import jwt from 'jsonwebtoken';

export default function authenticate(token) {
    if (!token) {
      return false
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if(decoded) {
        return decoded.userId
      } else {
        return false
      }
    } catch (error) {
      return false
    }
};