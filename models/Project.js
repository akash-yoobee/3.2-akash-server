const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title: String,
<<<<<<< HEAD
    body: String,
    slogan: String,
    desktopImageUrl: String,
    tabletImageUrl: String,
    mobileImageUrl: String,
    websiteUrl: String,
    moreInfo: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
=======
    slogan: String,
    body: String,
    url: String,
    desktopImageUrl: String,
    mobileImageUrl: String,
    // author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
>>>>>>> dev
}, { timestamps: true })

ProjectSchema.methods.toJSON = function () {
    return {
        id: this.id,
        title: this.title,
        slogan: this.slogan,
        url: this.url,
        desktopImageUrl: this.desktopImageUrl,
        mobileImageUrl: this.mobileImageUrl,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
        // author: this.author.toJSON()
    }
}

mongoose.model('Project', ProjectSchema)
