module.exports = (mongoose) => {
  const StudentSchema = mongoose.Schema(
    {
      fullName: { type: String, unique: true, required: [true, 'fullName?'] },
      email: { type: String, required: [true, 'email?'] },
    },
  );

  const Student = mongoose.model('student', StudentSchema);
  return Student;
};
