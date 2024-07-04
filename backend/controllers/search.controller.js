import User from '../models/user.model.js';

export const searchTeachersByName = async (req, res) => {
    try {
        const { name } = req.query;
        const teachers = await User.find({ fullName: { $regex: name, $options: 'i' }, role: 'teacher' }).select('-password');
        res.status(200).json(teachers);
    } catch (error) {
        console.log("Error in searchTeachersByName controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const searchTeachersBySubject = async (req, res) => {
    try {
        const { subject } = req.query;
        const student = await User.findById(req.user._id).select('nearestCities');
        const teachers = await User.find({
            teachingSubject: subject,
            teachingCities: { $in: student.nearestCities },
            role: 'teacher'
        }).select('-password');
        res.status(200).json(teachers);
    } catch (error) {
        console.log("Error in searchTeachersBySubject controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const searchTeachersByCity = async (req, res) => {
    try {
        const { city } = req.query;
        const student = await User.findById(req.user._id).select('subjects');
        const teachers = await User.find({
            teachingCities: city,
            teachingSubject: { $in: student.subjects },
            role: 'teacher'
        }).select('-password');
        res.status(200).json(teachers);
    } catch (error) {
        console.log("Error in searchTeachersByCity controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
