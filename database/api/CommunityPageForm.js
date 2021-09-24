/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
const express = require("express");

const router = express.Router();

// mongodb user model
const PostCommunity = require("../models/PostCommunity");

//  Comunity post
router.post("/communitypageform", (req, res) => {
  let {
    Post_Community_Title,
    Post_Community_Category,
    Post_Paragraph,
    Post_Edited,
    User_ID,
  } = req.body;
  Post_Community_Title = Post_Community_Title.trim();
  Post_Community_Category = Post_Community_Category.trim();
  Post_Paragraph = Post_Paragraph.trim();
  Post_Edited = Post_Edited.trim();
  User_ID = User_ID.trim();
  console.log("ffff"); // testing line
  if (
    Post_Community_Title == "" ||
    Post_Community_Category == "" ||
    Post_Paragraph == ""
  ) {
    res.json({
      status: "FAILED",
      message: "Empty input fields!",
    });
  } else {
    // Checking if user already exists

    const NewPostCommunity = new PostCommunity({
      Post_Community_Title,
      Post_Community_Category,
      Post_Paragraph,
      Post_Edited,
      User_ID,
    });

    NewPostCommunity.save()
      .then((result) => {
        res.json({
          status: "SUCCESS",
          message: "Signup successful",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          status: "FAILED",
          message: "An error occurred while saving user account!",
        });
        console.log(err);
      });
  }
});

// get all post
router.get("/", async (req, res) => {
  try {
    const posts = await PostCommunity.find();
    if (!posts) throw Error("No Items");
    console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Show a post (replace :id)
router.get("/:id", async (req, res) => {
  try {
    const post = await PostCommunity.findById(req.params.id);
    if (!post) throw Error("No Items");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await PostCommunity.findByIdAndDelete(req.params.id);
    if (!post) throw Error("No post found!");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//  Update a post
router.patch("/:id", async (req, res) => {
  try {
    let {
      Post_Community_Title,
      Post_Community_Category,
      Post_Paragraph,
      Post_Edited,
      User_ID,
    } = req.body;
    Post_Community_Title = Post_Community_Title.trim();
    Post_Community_Category = Post_Community_Category.trim();
    Post_Paragraph = Post_Paragraph.trim();
    Post_Edited = Post_Edited.trim();
    User_ID = User_ID.trim();
    console.log("ffff"); // testing line
    if (
      Post_Community_Title == "" ||
      Post_Community_Category == "" ||
      Post_Paragraph == ""
    ) {
      res.json({
        status: "FAILED",
        message: "Empty input fields!",
      });
    } else {
      // Checking if user already exists

      const UpdatePostCommunity = new PostCommunity({
        Post_Community_Title,
        Post_Community_Category,
        Post_Paragraph,
        Post_Edited,
        User_ID,
      });

      const post = await PostCommunity.findByIdAndUpdate(
        req.params.id,
        UpdatePostCommunity
      );
      if (!post) throw Error("Something went wrong while updating the post");
      res.status(200).json({ success: true });
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
