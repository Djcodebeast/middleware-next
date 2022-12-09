import { filter } from "lodash";
import { users } from "../../../data/users";


export default function handler(req, res) {
    const allUsers = filter(users, (user) => user.role === "user");

    res.status(200).json({ data: allUsers });
};