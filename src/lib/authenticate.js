
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'
import { decode } from 'punycode';


export default function authenticate(token) {
    if (!token) {
      return false
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      if(decoded) {
        return true
      } else {
        return false
      }
    } catch (error) {
      return false
    }
};