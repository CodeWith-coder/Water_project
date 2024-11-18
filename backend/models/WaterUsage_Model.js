const mongoose = require('mongoose');

const ExpenseSchema_WaterUsageSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
			maxLength: 50,
		},
		amount: {
			type: Number,
			required: true,
			maxLength: 20,
			trim: true,
		},
		type: {
			type: String,
			default: 'shower',
		},
		date: {
			type: Date,
			required: true,
			trim: true,
		},
		category: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			maxLength: 20,
			trim: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('WaterUsage', ExpenseSchema_WaterUsageSchema);
