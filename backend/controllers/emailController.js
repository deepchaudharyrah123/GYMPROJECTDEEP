import Email from "../models/EmailModel.js";

export const saveEmail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required details (name, email, message).",
    });
  }

  try {
    const newEmail = new Email({ name, email, message });
    await newEmail.save();
    res.status(201).json({
      success: true,
      message: "Message stored successfully.",
    });
  } catch (error) {
    console.error("Error saving email:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};


export const getEmail = async (req, res) => {
  try {
    const emails = await Email.find();
    res.status(200).json({ success: true, emails });
  } catch (error) {
    console.error("Error fetching emails:", error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const deleteReservation = async (req, res, next) => {
  const { id } = req.params;

  try {
      const reservation = await Email.findByIdAndDelete(id);

      if (!reservation) {
          return next(new ErrorHandler('Email not found', 404));
      }

      res.status(200).json({ success: true, message: 'Email deleted successfully' });
  } catch (error) {
      next(error);
  }
};