var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var SummarySchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    
  },
  // `link` is required and of type String
  body: {
    type: String,
    
  },
  
});

// This creates our model from the above schema, using mongoose's model method
var Summary = mongoose.model("Summary", SummarySchema);

// Export the Article model
module.exports = Summary;
