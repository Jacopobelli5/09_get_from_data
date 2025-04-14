// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
router.get("/", (req, res) => res.render("index.ejs", {title: "Dynamic Title", header: "This is the Homepage"}));
router.get("/about", (req, res) => res.render("about.ejs", {aboutTitle: "About", aboutHeader: "This is the about page"}));
router.get("/contact", (req, res) => res.render("contact.ejs"))
router.get("/search", (req, res) => res.render("search.ejs"))

// Export the router object
module.exports = router