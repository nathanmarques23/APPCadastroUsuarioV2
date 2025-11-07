import User from "../models/user.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET pelo id da tabela :)
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: "ID é obrigatório" });
        }
        
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST 
export const createUser = async (req, res) => {
    try {
        const { name, email, password, fullName } = req.body;

        if (!name || !email || !password || !fullName) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios" });
        }

        
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ error: "Email já cadastrado" });
        }

        const newUser = await User.create({
            name,
            email,
            password, 
            fullName
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT atualizar os caba por id

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, fullName } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        
        if (email && email !== user.email) {
            const emailExists = await User.findOne({ where: { email } });
            if (emailExists) {
                return res.status(409).json({ error: "Email já está em uso" });
            }
        }


        await user.update({
            name: name || user.name,
            email: email || user.email,
            password: password || user.password,
            fullName: fullName || user.fullName
        });

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE quando alguém fazer bosta kkkkkkkj

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        await user.destroy();
        res.status(204).json(); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



//depois dessa um mbzinho né