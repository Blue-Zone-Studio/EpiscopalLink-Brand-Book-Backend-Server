const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: [true, 'Project ID is required.']
  },
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Freelancer',
    required: [true, 'Freelancer ID is required.']
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, 'Rating is required.']
  },
  comment: {
    type: String,
    maxlength: [500, 'Comment cannot be more than 500 characters.']
  },
  dateOfReview: {
    type: Date,
    required: [true, 'Date of review is required.'],
    default: Date.now
  }
}, {
  timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
