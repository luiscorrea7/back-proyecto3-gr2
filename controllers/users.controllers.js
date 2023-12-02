
const getAllUsers = async (req, res) => {
  try {
    res.status(200).json('usuarios traidos con exito');
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    let { id } = req.params
    console.log(id);
    res.status(200).json(`el id de su usuario es ${id}`);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUserByEmail = async (req, res) => {
  try {
    let { email } = req.params;
    res.status(200).json(`el email de su user es ${email}`);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const payload = req.body;
    res.status(201).json(payload);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    console.log(payload);
    res.status(200).json(`el objeto a modificar tiene el id: ${id}`);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json('usuario eliminado con exito');
  } catch (error) {
    res.status(500).json(error.message);
  }
}


module.exports =  {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  editUser,
  deleteUser
};