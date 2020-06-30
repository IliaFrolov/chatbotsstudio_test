module.exports = (mongoose) => {
  const LessonSchema = mongoose.Schema(
    {
      topic: { type: String, required: [true, 'topic?'] },
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
        required: [true, 'classRoom?'],
      },
      time: {
        start: { type: String, required: [true, 'starttime?'] },
        end: { type: String, required: [true, 'endtime?'] },
      },
    },
  );

  const Lesson = mongoose.model('lesson', LessonSchema);
  return Lesson;
};
