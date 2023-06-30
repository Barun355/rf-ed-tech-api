const { Router } = require("express");
const {
    handleFetchCourses,
    handleFetchSingleCourse,
} = require("../controllers/CourseController");
const router = Router();

router.get("/", handleFetchCourses);

router.get("/:id", handleFetchSingleCourse);

module.exports = router;
