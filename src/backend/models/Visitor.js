import mongoose from 'mongoose';

const VisitorSchema = mongoose.Schema({
    path: String,
    ip: String,
    time: Date
});

export default mongoose.model('Visitor', VisitorSchema);
