module.exports = (mongoose) => {
  const GroupSchema = mongoose.Schema(
    {
      name: { type: String, unique: true, required: [true, 'group name?'] },
      students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
      }],
    },
  );

  const Group = mongoose.model('group', GroupSchema);
  return Group;
};
