// Métodos do controller disponíveis: Index, Show, Store, Update, Destroy
// Index: Listagem
// Show: Mostrar uma única
// Store: Criar
// Update: Alterar
// Destroy: Deletar
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;
    
    let user = await User.findOne({ email })

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}