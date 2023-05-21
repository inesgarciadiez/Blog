const getAll = () => {
    return db.query('SELECT * FROM posts JOIN autores ON posts.AUTOR_id=autores.id');
}

const getById = (AUTOR_id) => {
    return db.query('select * from posts where id = ?', [AUTOR_id]);
}

const getByAutorId = (AUTOR_id) => {
    return db.query('SELECT * FROM posts JOIN autores ON posts.AUTOR_id=autores.id WHERE AUTOR_id = ?', [AUTOR_id]);
}

const create = ({ titulo, descripcion, fecha_creacion, categoria, AUTOR_id}) => {
    return db.query('insert into posts (titulo, descripcion, fecha_creacion, categoria, AUTOR_id) values (?, ?, ?, ?, ?)',
    [titulo, descripcion, fecha_creacion, categoria, AUTOR_id]
    )
}

module.exports = {
    getAll, getById, getByAutorId, create
}