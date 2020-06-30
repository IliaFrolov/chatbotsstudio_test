module.exports = (mongoose) => {
  const LessonSchema = mongoose.Schema(
    {
      theme: { type: String, unique: true, required: [true, 'name?'] },
      teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher',
        required: [true, 'teacher?'],
      }],
      group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'group',
        required: [true, 'group?'],
      },
      classRoom: {
        type: String,
        enum: ['', 'coat', 'mousse', 'mainTaste', 'additionalTaste', 'cake'],
        required: [true, 'classRoom?'],
      },
      time: {
        start: String,
        end: String,
        required: [true, 'time?'],
      },
    },
  );

  LessonSchema.method('toJSON', () => {
    const { __v, ...object } = this.toObject();
    // object.id = _id;
    return object;
  });

  const Lesson = mongoose.model('lesson', LessonSchema);
  return Lesson;
};
