const courses = require('../public/static/files/courses')

const handleFetchCourses = (req, res) => {
    // console.log(courses)
    res.json(courses)
}

const handleFetchSingleCourse = (req, res) => {
    const id = req.params.id
    // console.log(req)
    res.json(courses[id - 1])
}

module.exports = {
    handleFetchCourses,
    handleFetchSingleCourse
}