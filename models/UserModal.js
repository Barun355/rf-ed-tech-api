// importing require library
const mongoose = require("mongoose");

// creating user schema by invkoing mongoose.Schema() method and passing an object.
const usersSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        enum: ["ADMIN", "STUDENT", "TEACHER"],
        default: "STUDENT",
    },
    user_name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salt: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    phone_number: {
        type: Number,
        unique: true,
    },
    address: {
        street: {
            type: String,
            default: "",
        },
        area: {
            type: String,
            default: "",
        },
        city: {
            type: String,
            default: "",
        },
        state: {
            type: String,
            default: "",
        },
        country: {
            type: String,
            default: "India",
        },
    }
},{ timestamps: true });

// pre-save hook of mongoose to create additional field to the schema on the basic of role
// usersSchema.pre("save", function (next) {
//     if (this.role == "STUDENT") {
//         this.schema.add({
//             course_data: {}
//         })
//         console.log(this.role);
//         // this.schema.add({
//         //     course_data: [
//         //         {
//         //             id: {
//         //                 type: String,
//         //                 required: true,
//         //                 unique: true,
//         //             },
//         //             category: {
//         //                 type: String, // purchased, bookmarked, wishlist, none
//         //                 default: "none",
//         //             },
//         //             resource: [
//         //                 {
//         //                     notes: [
//         //                         {
//         //                             id: {
//         //                                 type: String,
//         //                                 required: true,
//         //                                 unique: true,
//         //                             },
//         //                             content: String,
//         //                         },
//         //                     ],
//         //                 },
//         //             ],
//         //         },
//         //     ],
//         // });
//     } else if (this.role == "TEACHER") {
//         console.log(this.role);
//         this.schema.add({
//             course_in: {
//                 course_id: [
//                     {
//                         type: String,
//                         required: true,
//                         unique: true,
//                     },
//                 ],
//             },
//             qualification: [
//                 {
//                     college: String,
//                     degree: String,
//                     rank: Number,
//                 },
//             ],
//         });
//     }
//     next();
// });

// creating instance of a modal using userSchema Scheme
const Users = mongoose.model("Users", usersSchema);

// exporting modal
module.exports = Users;
