import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema ({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is subscribing 
        ref: "User"
    },
    chanel: {
        type: Schema.Types.ObjectId, // one to whom "subscriber" i subscribing
        ref:"User"
    }

}, {
    timestamps: true
})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)