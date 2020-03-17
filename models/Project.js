const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title: String,
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
}, { timestamps: true })

ProjectSchema.methods.toJSON = function () {
    return {
        id: this.id,
        title: this.title,
        url: this.url,
        desktopImageUrl: this.desktopImageUrl,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
        // author: this.author.toJSON()
    }
}

mongoose.model('Project', ProjectSchema)
