import mongoose from 'mongoose';

const schema = mongoose.Schema({
  name: { type: String, required: true },
  show_time: { type: String, required: true },
  cast: { type: String, required: true },
  banner: { type: String },
  theater: { type: mongoose.Types.ObjectId, ref: 'movies' },
});

const Movie = mongoose.model('movies', schema);

export default Movie;
