module.exports = (mongoose) => {
  const TeacherSchema = mongoose.Schema(
    {
      fullName: { type: String, unique: true, required: [true, 'fullName?'] },
      email: { type: String, required: [true, 'email?'] },
    },
  );

  const Teacher = mongoose.model('teacher', TeacherSchema);
  return Teacher;
};
