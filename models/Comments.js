const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  secondComment: String,
  profilePic: String,
  email: String,
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
}, { timestamps: true });

UserSchema.methods.toJSON = function () {
  return {
    id: this.id,
    firstName: this.firstName,
    blurb: this.blurb,
    profilePic: this.profilePic,
    email: this.email,
    projects: this.projects
  }
};

mongoose.model('Comment', UserSchema);
