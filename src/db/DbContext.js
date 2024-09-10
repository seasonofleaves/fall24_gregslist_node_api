import mongoose, { mongo } from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CarSchema } from '../models/Car.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Cars = mongoose.model('Car', CarSchema)
}

export const dbContext = new DbContext()
