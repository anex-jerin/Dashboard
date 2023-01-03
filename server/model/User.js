import mongoose from 'mongoose';
const {Schema} = mongoose

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      min: 50,
      max: 100,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    city: String,
    State: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ['user', 'admin', 'superadmin'],
      default: 'admin',
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', UserSchema)

export default User
