import { users } from "../../../data/users";

export default function handler(req, res) {
    const allUsers = users.filter((user) => user.role === "admin")
    res.status(200).json({ data: allUsers });
};