// auth/jwt.service.ts

import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  private readonly secretKey = process.env.SECRET_KEY

  sign(payload: Record<string, any>): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: '1h' });
  }

  verify(token: string): Record<string, any> {
    try {
      const decodedToken = jwt.verify(token, this.secretKey) as Record<string, any>;
      return decodedToken;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
