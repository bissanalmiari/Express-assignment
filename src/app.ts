import express from "express";
import customerRoutes from "./routes/customerRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import menuItemRoutes from "./routes/menuItemRoutes";
import orderRoutes from "./routes/orderRoutes";
import orderItemRoutes from "./routes/orderItemRoutes";

const app = express();

app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/menu-items", menuItemRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/order-items", orderItemRoutes);

export default app;