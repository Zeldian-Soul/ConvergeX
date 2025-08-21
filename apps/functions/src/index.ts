import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true, uptime: process.uptime() }));

app.post("/payments/creatorOrder", async (req, res) => {
    try {
        const { amount, currency, receipt } = req.body;
        return res.json({ orderId: "order_dummy_123", amount, receipt });        
    } catch (e){
        console.error(e);
        res.status(500).json({ error: "server_error" });
    }
});

const port = +(process.env.PORT || 5000);
app.listen(port, () => console.log('Functions dev server listening on ${port}'));