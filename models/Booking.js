const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
  itemId: [
    {
      _id: {
        type: ObjectId,
        ref: "Item",
      },
      price: {
        type: Number,
        required: true,
      },
      night: {
        type: Number,
        required: true,
      },
    },
  ],
  memberId: {
    type: ObjectId,
    ref: "Member",
  },
  bankId: {
    type: ObjectId,
    ref: "Bank",
  },
  proofPayment: {
    type: String,
    required: true,
  },
  fromBank: {
    type: String,
    required: true,
  },
  accountHolder: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);