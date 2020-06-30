module.exports = (mongoose) => {
  const StudentSchema = mongoose.Schema(
    {
      fullName: { type: String, unique: true, required: [true, 'fullName?'] },
      email: { type: String, required: [true, 'email?'] },
    },
  );

  StudentSchema.method('toJSON', () => {
    const { __v, ...object } = this.toObject();
    // object.id = _id;
    return object;
  });

  const Student = mongoose.model('student', StudentSchema);
  return Student;
};
