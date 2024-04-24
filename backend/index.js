const express= require('express')
const mongoose= require('mongoose')
const cors = require('cors')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/FreshBite-Kitchen', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const cartItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, default: 1 },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

// Get cart items for a user
app.get('/cartItems', async (req, res) => {
    try {
        const items = await CartItem.find({ userId: req.query.userId });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new cart item
app.post('/cartItems', async (req, res) => {
    const item = new CartItem(req.body);
    try {
        const savedItem = await item.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a cart item
app.put('/cartItems/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedItem = await CartItem.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a cart item
app.delete('/cartItems/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await CartItem.findByIdAndDelete(id);
        res.json({ message: 'Item removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  