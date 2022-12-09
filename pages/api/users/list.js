import { users } from "../../../data/users";

export default function handler(req, res) {
    const allUsers = users.filter((user) => user.role === "user")

    res.status(200).json({ data: allUsers });
};