const express = require('express');
const app = express();

// Helper function to get the day-specific cheerful message
function getDayMessage(day) {
    const dayMessages = {
        Monday: "Happy Monday! Start your week with energy!",
        Tuesday: "It's Tuesday! Keep up the momentum!",
        Wednesday: "Happy Wednesday! You're halfway through the week!",
        Thursday: "It's Thursday! Almost there!",
        Friday: "It's Friday! The weekend is near!",
        Saturday: "Happy Saturday! Enjoy your weekend!",
        Sunday: "It's Sunday! Rest and recharge for the week ahead!"
    };
    return dayMessages[day] || "Have a wonderful day!";
}

// Define the GET endpoint
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).json({ error: "Name query parameter is required" });
    }

    const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
    const welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`;
    const dayMessage = getDayMessage(currentDay);

    res.json({
        welcomeMessage,
        dayMessage
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
