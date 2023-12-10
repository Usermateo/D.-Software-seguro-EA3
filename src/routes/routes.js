
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/equipmentTypes', require('./src/routes/equipmentTypeRoutes'));
app.use('/api/equipmentStatus', require('./src/routes/equipmentStatusRoutes'));
app.use('/api/users', require('./src/routes/userRoutes'));
app.use('/api/brands', require('./src/routes/brandRoutes'));
app.use('/api/inventory', require('./src/routes/inventoryRoutes'));

