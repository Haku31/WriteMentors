import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrdersSchema = new Schema(
{
    gigId: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    title: {
        type: Number,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    sellerId: {
        type: String,
        required: true,
    },
    buyerId: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    payment_intent: {
        type: String,
        required: true,
    },


},{
  timestamps:true
});

export default mongoose.model("Orders", OrdersSchema)

