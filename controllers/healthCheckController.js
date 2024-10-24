export const healthCheckController = async (req, res) => {
    return res.json({"status": "200", "message": "active"})
};
