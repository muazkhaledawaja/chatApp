const experss = require('express');
const cors = require('cors');
const axios = require('axios');

const app = experss();
app.use(experss.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // Get or create user on Chat Engine!
    try {
      const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "1d95b464-920e-4b58-b2ab-73f93f045cbb" } }
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
  });
  

app.listen(5000, () => console.log('Server running on port 5000'));