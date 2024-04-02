import mongoose from 'mongoose';

const moviesSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	ratings: { type: Number, required: true, trim: true, min: 1, max: 5 },
	money: {
		type: mongoose.Decimal128,
		required: true,
		validate: (v) => v > 10,
	},
	genre: { type: Array, required: true },
	isActive: { type: Boolean, default: true },
	comments: [
		{
			value: { type: String, trim: true },
			published: { type: Date, default: Date.now },
		},
	],
});
